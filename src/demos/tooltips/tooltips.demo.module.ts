/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular/clarity.module';

import {TooltipsSizesDemo} from "./tooltips-sizes";
import {TooltipsDirectionsDemo} from "./tooltips-directions";
import {TooltipsIconDemo} from "./tooltips-icons";
import {TooltipsTextDemo} from "./tooltips-text";
import {TooltipsButtonsDemo} from "./tooltips-buttons";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
    ],
    declarations: [
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo
    ],
    exports: [
        TooltipsSizesDemo,
        TooltipsDirectionsDemo,
        TooltipsIconDemo,
        TooltipsTextDemo,
        TooltipsButtonsDemo
    ]
})
export default class TooltipsDemoModule {
}
