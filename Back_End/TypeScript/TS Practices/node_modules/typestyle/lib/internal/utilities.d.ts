import * as types from '../types';
/** Raf for node + browser */
export declare const raf: (cb: () => void) => void;
/**
 * Utility to join classes conditionally
 */
export declare function classes(...classes: (string | false | undefined | null)[]): string;
/**
 * Merges various styles into a single style object.
 * Note: if two objects have the same property the last one wins
 */
export declare function extend(...objects: (types.NestedCSSProperties | undefined | null | false)[]): types.NestedCSSProperties;
/**
 * Utility to help customize styles with media queries. e.g.
 * ```
 * style(
 *  media({maxWidth:500}, {color:'red'})
 * )
 * ```
 */
export declare const media: (mediaQuery: types.MediaQuery, ...objects: types.NestedCSSProperties[]) => types.NestedCSSProperties;
