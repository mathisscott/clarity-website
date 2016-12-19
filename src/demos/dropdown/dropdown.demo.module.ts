/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular/clarity.module';


import {DropdownStaticDefaultDemo} from "./dropdown-static-default";
import {DropdownStaticPositioningDemo} from "./dropdown-static-positioning";
import {DropdownStaticFontAwesomeToggleDemo} from "./dropdown-static-fontawesome-toggle";
import {DropdownStaticIconToggleDemo} from "./dropdown-static-icon-toggle";
import {DropdownStaticButtonLinkToggleDemo} from "./dropdown-static-buttonlink-toggle";
import {DropdownAngularPositioningDemo} from "./dropdown-angular-positioning";
import {DropdownAngularCloseItemFalseDemo} from "./dropdown-angular-close-item-false";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
    ],
    declarations: [
        DropdownStaticDefaultDemo,
        DropdownStaticPositioningDemo,
        DropdownStaticFontAwesomeToggleDemo,
        DropdownStaticIconToggleDemo,
        DropdownStaticButtonLinkToggleDemo,
        DropdownAngularPositioningDemo,
        DropdownAngularCloseItemFalseDemo
    ],
    exports: [
        DropdownStaticDefaultDemo,
        DropdownStaticPositioningDemo,
        DropdownStaticIconToggleDemo,
        DropdownStaticButtonLinkToggleDemo,
        DropdownAngularPositioningDemo,
        DropdownAngularCloseItemFalseDemo
    ]
})
export default class DropdownDemoModule {
}
