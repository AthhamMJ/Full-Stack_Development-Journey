var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The unique id is used for unique hashes.
 */
var uniqueId = 0;
/**
 * Tag styles with this string to get unique hashes.
 */
export var IS_UNIQUE = '__DO_NOT_DEDUPE_STYLE__';
var upperCasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var interpolatePattern = /&/g;
var escapePattern = /[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g;
var propLower = function (m) { return "-" + m.toLowerCase(); };
/**
 * CSS properties that are valid unit-less numbers.
 */
var cssNumberProperties = [
    'animation-iteration-count',
    'box-flex',
    'box-flex-group',
    'column-count',
    'counter-increment',
    'counter-reset',
    'flex',
    'flex-grow',
    'flex-positive',
    'flex-shrink',
    'flex-negative',
    'font-weight',
    'line-clamp',
    'line-height',
    'opacity',
    'order',
    'orphans',
    'tab-size',
    'widows',
    'z-index',
    'zoom',
    // SVG properties.
    'fill-opacity',
    'stroke-dashoffset',
    'stroke-opacity',
    'stroke-width'
];
/**
 * Map of css number properties.
 */
var CSS_NUMBER = Object.create(null);
// Add vendor prefixes to all unit-less properties.
for (var _i = 0, _a = ['-webkit-', '-ms-', '-moz-', '-o-', '']; _i < _a.length; _i++) {
    var prefix = _a[_i];
    for (var _b = 0, cssNumberProperties_1 = cssNumberProperties; _b < cssNumberProperties_1.length; _b++) {
        var property = cssNumberProperties_1[_b];
        CSS_NUMBER[prefix + property] = true;
    }
}
/**
 * Escape a CSS class name.
 */
export var escape = function (str) { return str.replace(escapePattern, '\\$&'); };
/**
 * Transform a JavaScript property into a CSS property.
 */
export function hyphenate(propertyName) {
    return propertyName
        .replace(upperCasePattern, propLower)
        .replace(msPattern, '-ms-'); // Internet Explorer vendor prefix.
}
/**
 * Generate a hash value from a string.
 */
export function stringHash(str) {
    var value = 5381;
    var len = str.length;
    while (len--)
        value = (value * 33) ^ str.charCodeAt(len);
    return (value >>> 0).toString(36);
}
/**
 * Transform a style string to a CSS string.
 */
function styleToString(key, value) {
    if (typeof value === 'number' && value !== 0 && !CSS_NUMBER[key]) {
        return key + ":" + value + "px";
    }
    return key + ":" + value;
}
/**
 * Sort an array of tuples by first value.
 */
function sortTuples(value) {
    return value.sort(function (a, b) { return a[0] > b[0] ? 1 : -1; });
}
/**
 * Categorize user styles.
 */
function parseStyles(styles, hasNestedStyles) {
    var properties = [];
    var nestedStyles = [];
    var isUnique = false;
    // Sort keys before adding to styles.
    for (var _i = 0, _a = Object.keys(styles); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = styles[key];
        if (value !== null && value !== undefined) {
            if (key === IS_UNIQUE) {
                isUnique = true;
            }
            else if (typeof value === 'object' && !Array.isArray(value)) {
                nestedStyles.push([key.trim(), value]);
            }
            else {
                properties.push([hyphenate(key.trim()), value]);
            }
        }
    }
    return {
        styleString: stringifyProperties(sortTuples(properties)),
        nestedStyles: hasNestedStyles ? nestedStyles : sortTuples(nestedStyles),
        isUnique: isUnique
    };
}
/**
 * Stringify an array of property tuples.
 */
function stringifyProperties(properties) {
    return properties.map(function (_a) {
        var name = _a[0], value = _a[1];
        if (!Array.isArray(value))
            return styleToString(name, value);
        return value.map(function (x) { return styleToString(name, x); }).join(';');
    }).join(';');
}
/**
 * Interpolate CSS selectors.
 */
function interpolate(selector, parent) {
    if (selector.indexOf('&') > -1) {
        return selector.replace(interpolatePattern, parent);
    }
    return parent + " " + selector;
}
/**
 * Recursive loop building styles with deferred selectors.
 */
function stylize(cache, selector, styles, list, parent) {
    var _a = parseStyles(styles, !!selector), styleString = _a.styleString, nestedStyles = _a.nestedStyles, isUnique = _a.isUnique;
    var pid = styleString;
    if (selector.charCodeAt(0) === 64 /* @ */) {
        var rule = cache.add(new Rule(selector, parent ? undefined : styleString, cache.hash));
        // Nested styles support (e.g. `.foo > @media > .bar`).
        if (styleString && parent) {
            var style = rule.add(new Style(styleString, rule.hash, isUnique ? "u" + (++uniqueId).toString(36) : undefined));
            list.push([parent, style]);
        }
        for (var _i = 0, nestedStyles_1 = nestedStyles; _i < nestedStyles_1.length; _i++) {
            var _b = nestedStyles_1[_i], name = _b[0], value = _b[1];
            pid += name + stylize(rule, name, value, list, parent);
        }
    }
    else {
        var key = parent ? interpolate(selector, parent) : selector;
        if (styleString) {
            var style = cache.add(new Style(styleString, cache.hash, isUnique ? "u" + (++uniqueId).toString(36) : undefined));
            list.push([key, style]);
        }
        for (var _c = 0, nestedStyles_2 = nestedStyles; _c < nestedStyles_2.length; _c++) {
            var _d = nestedStyles_2[_c], name = _d[0], value = _d[1];
            pid += name + stylize(cache, name, value, list, key);
        }
    }
    return pid;
}
/**
 * Register all styles, but collect for selector interpolation using the hash.
 */
function composeStyles(container, selector, styles, isStyle, displayName) {
    var cache = new Cache(container.hash);
    var list = [];
    var pid = stylize(cache, selector, styles, list);
    var hash = "f" + cache.hash(pid);
    var id = displayName ? displayName + "_" + hash : hash;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var _a = list_1[_i], selector_1 = _a[0], style = _a[1];
        var key = isStyle ? interpolate(selector_1, "." + escape(id)) : selector_1;
        style.add(new Selector(key, style.hash, undefined, pid));
    }
    return { cache: cache, pid: pid, id: id };
}
/**
 * Cache to list to styles.
 */
function join(arr) {
    var res = '';
    for (var i = 0; i < arr.length; i++)
        res += arr[i];
    return res;
}
/**
 * Noop changes.
 */
var noopChanges = {
    add: function () { return undefined; },
    change: function () { return undefined; },
    remove: function () { return undefined; }
};
/**
 * Implement a cache/event emitter.
 */
var Cache = /** @class */ (function () {
    function Cache(hash, changes) {
        if (hash === void 0) { hash = stringHash; }
        if (changes === void 0) { changes = noopChanges; }
        this.hash = hash;
        this.changes = changes;
        this.sheet = [];
        this.changeId = 0;
        this._keys = [];
        this._children = Object.create(null);
        this._counters = Object.create(null);
    }
    Cache.prototype.add = function (style) {
        var count = this._counters[style.id] || 0;
        var item = this._children[style.id] || style.clone();
        this._counters[style.id] = count + 1;
        if (count === 0) {
            this._children[item.id] = item;
            this._keys.push(item.id);
            this.sheet.push(item.getStyles());
            this.changeId++;
            this.changes.add(item, this._keys.length - 1);
        }
        else {
            // Check if contents are different.
            if (item.getIdentifier() !== style.getIdentifier()) {
                throw new TypeError("Hash collision: " + style.getStyles() + " === " + item.getStyles());
            }
            var oldIndex = this._keys.indexOf(style.id);
            var newIndex = this._keys.length - 1;
            var prevChangeId = this.changeId;
            if (oldIndex !== newIndex) {
                this._keys.splice(oldIndex, 1);
                this._keys.push(style.id);
                this.changeId++;
            }
            if (item instanceof Cache && style instanceof Cache) {
                var prevChangeId_1 = item.changeId;
                item.merge(style);
                if (item.changeId !== prevChangeId_1) {
                    this.changeId++;
                }
            }
            if (this.changeId !== prevChangeId) {
                if (oldIndex === newIndex) {
                    this.sheet.splice(oldIndex, 1, item.getStyles());
                }
                else {
                    this.sheet.splice(oldIndex, 1);
                    this.sheet.splice(newIndex, 0, item.getStyles());
                }
                this.changes.change(item, oldIndex, newIndex);
            }
        }
        return item;
    };
    Cache.prototype.remove = function (style) {
        var count = this._counters[style.id];
        if (count > 0) {
            this._counters[style.id] = count - 1;
            var item = this._children[style.id];
            var index = this._keys.indexOf(item.id);
            if (count === 1) {
                delete this._counters[style.id];
                delete this._children[style.id];
                this._keys.splice(index, 1);
                this.sheet.splice(index, 1);
                this.changeId++;
                this.changes.remove(item, index);
            }
            else if (item instanceof Cache && style instanceof Cache) {
                var prevChangeId = item.changeId;
                item.unmerge(style);
                if (item.changeId !== prevChangeId) {
                    this.sheet.splice(index, 1, item.getStyles());
                    this.changeId++;
                    this.changes.change(item, index, index);
                }
            }
        }
    };
    Cache.prototype.merge = function (cache) {
        for (var _i = 0, _a = cache._keys; _i < _a.length; _i++) {
            var id = _a[_i];
            this.add(cache._children[id]);
        }
        return this;
    };
    Cache.prototype.unmerge = function (cache) {
        for (var _i = 0, _a = cache._keys; _i < _a.length; _i++) {
            var id = _a[_i];
            this.remove(cache._children[id]);
        }
        return this;
    };
    Cache.prototype.clone = function () {
        return new Cache(this.hash).merge(this);
    };
    return Cache;
}());
export { Cache };
/**
 * Selector is a dumb class made to represent nested CSS selectors.
 */
var Selector = /** @class */ (function () {
    function Selector(selector, hash, id, pid) {
        if (id === void 0) { id = "s" + hash(selector); }
        if (pid === void 0) { pid = ''; }
        this.selector = selector;
        this.hash = hash;
        this.id = id;
        this.pid = pid;
    }
    Selector.prototype.getStyles = function () {
        return this.selector;
    };
    Selector.prototype.getIdentifier = function () {
        return this.pid + "." + this.selector;
    };
    Selector.prototype.clone = function () {
        return new Selector(this.selector, this.hash, this.id, this.pid);
    };
    return Selector;
}());
export { Selector };
/**
 * The style container registers a style string with selectors.
 */
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(style, hash, id) {
        if (id === void 0) { id = "c" + hash(style); }
        var _this = _super.call(this, hash) || this;
        _this.style = style;
        _this.hash = hash;
        _this.id = id;
        return _this;
    }
    Style.prototype.getStyles = function () {
        return this.sheet.join(',') + "{" + this.style + "}";
    };
    Style.prototype.getIdentifier = function () {
        return this.style;
    };
    Style.prototype.clone = function () {
        return new Style(this.style, this.hash, this.id).merge(this);
    };
    return Style;
}(Cache));
export { Style };
/**
 * Implement rule logic for style output.
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule(rule, style, hash, id, pid) {
        if (style === void 0) { style = ''; }
        if (id === void 0) { id = "a" + hash(rule + "." + style); }
        if (pid === void 0) { pid = ''; }
        var _this = _super.call(this, hash) || this;
        _this.rule = rule;
        _this.style = style;
        _this.hash = hash;
        _this.id = id;
        _this.pid = pid;
        return _this;
    }
    Rule.prototype.getStyles = function () {
        return this.rule + "{" + this.style + join(this.sheet) + "}";
    };
    Rule.prototype.getIdentifier = function () {
        return this.pid + "." + this.rule + "." + this.style;
    };
    Rule.prototype.clone = function () {
        return new Rule(this.rule, this.style, this.hash, this.id, this.pid).merge(this);
    };
    return Rule;
}(Cache));
export { Rule };
/**
 * The FreeStyle class implements the API for everything else.
 */
var FreeStyle = /** @class */ (function (_super) {
    __extends(FreeStyle, _super);
    function FreeStyle(hash, debug, id, changes) {
        if (hash === void 0) { hash = stringHash; }
        if (debug === void 0) { debug = typeof process !== 'undefined' && process.env['NODE_ENV'] !== 'production'; }
        if (id === void 0) { id = "f" + (++uniqueId).toString(36); }
        var _this = _super.call(this, hash, changes) || this;
        _this.hash = hash;
        _this.debug = debug;
        _this.id = id;
        return _this;
    }
    FreeStyle.prototype.registerStyle = function (styles, displayName) {
        var debugName = this.debug ? displayName : undefined;
        var _a = composeStyles(this, '&', styles, true, debugName), cache = _a.cache, id = _a.id;
        this.merge(cache);
        return id;
    };
    FreeStyle.prototype.registerKeyframes = function (keyframes, displayName) {
        return this.registerHashRule('@keyframes', keyframes, displayName);
    };
    FreeStyle.prototype.registerHashRule = function (prefix, styles, displayName) {
        var debugName = this.debug ? displayName : undefined;
        var _a = composeStyles(this, '', styles, false, debugName), cache = _a.cache, pid = _a.pid, id = _a.id;
        var rule = new Rule(prefix + " " + escape(id), undefined, this.hash, undefined, pid);
        this.add(rule.merge(cache));
        return id;
    };
    FreeStyle.prototype.registerRule = function (rule, styles) {
        this.merge(composeStyles(this, rule, styles, false).cache);
    };
    FreeStyle.prototype.registerCss = function (styles) {
        this.merge(composeStyles(this, '', styles, false).cache);
    };
    FreeStyle.prototype.getStyles = function () {
        return join(this.sheet);
    };
    FreeStyle.prototype.getIdentifier = function () {
        return this.id;
    };
    FreeStyle.prototype.clone = function () {
        return new FreeStyle(this.hash, this.debug, this.id, this.changes).merge(this);
    };
    return FreeStyle;
}(Cache));
export { FreeStyle };
/**
 * Exports a simple function to create a new instance.
 */
export function create(hash, debug, changes) {
    return new FreeStyle(hash, debug, undefined, changes);
}
//# sourceMappingURL=free-style.js.map