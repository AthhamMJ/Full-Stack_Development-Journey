import { GeometricObjects } from "./geometricObjects";
export declare class Rectangle extends GeometricObjects {
    private width;
    private height;
    constructor(width: number, height: number, color: string, filled: boolean);
    getWidth(): number;
    getHeight(): number;
    setWidth(width: number): void;
    setHeight(height: number): void;
    getArea(): number;
    getPerimeter(): number;
}
//# sourceMappingURL=rectangle.d.ts.map