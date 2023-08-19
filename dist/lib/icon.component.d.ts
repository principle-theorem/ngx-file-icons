import { OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class IconComponent implements OnInit, OnChanges {
    classes: string[];
    set: string;
    type: string;
    size: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(): void;
    chooseSet(): void;
    chooseType(): void;
    chooseSize(): void;
    filterSet(): string;
    filterType(): string;
    filterSize(): string;
    transformSet(): string;
    createClass(value: string, prefix: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "file-icon", never, { "set": { "alias": "set"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=icon.component.d.ts.map