/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular/clarity.module';

import {TabsStaticDemo} from "./tabs-static";
import {TabsAngularDemo} from "./tabs-angular";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
    ],
    declarations: [
        TabsStaticDemo,
        TabsAngularDemo
    ],
    exports: [
        TabsStaticDemo,
        TabsAngularDemo
    ]
})
export default class TabsDemoModule {
}
