/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular/clarity.module';


import {BadgeColorsDemo} from "./badge-colors";
import {BadgeStatusesDemo} from "./badge-statuses";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
    ],
    declarations: [
        BadgeColorsDemo,
        BadgeStatusesDemo
    ],
    exports: [
        BadgeColorsDemo,
        BadgeStatusesDemo
    ]
})
export default class BadgesDemoModule {
}
