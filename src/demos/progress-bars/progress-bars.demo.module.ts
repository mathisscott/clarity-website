/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from 'clarity-angular';
import {ProgressBarExamplesDemo} from "./progress-bar-examples";
import {ProgressBarColorsDemo} from "./progress-bar-colors";
import {ProgressBarAnimationsDemo} from "./progress-bar-animations";
import {ProgressBarCardsDemo} from "./progress-bar-cards";
import {ProgressBarSidenavDemo} from "./progress-bar-sidenav";
import {ProgressBarLoopDemo} from "./progress-bar-loop";
import {ProgressBarStaticDemo} from "./progress-bar-static";
import {ProgressBarStaticCardsDemo} from "./progress-bar-static-cards";
import {ProgressBarInlineDemo} from "./progress-bar-inline";
import {ProgressBarInlineCardsDemo} from "./progress-bar-inline-cards";
import {OldProgressBarCardsDemo} from "./old-progress-bar-cards";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule.forChild(),
    ],
    declarations: [
        ProgressBarExamplesDemo,
        ProgressBarColorsDemo,
        ProgressBarAnimationsDemo,
        ProgressBarCardsDemo,
        ProgressBarSidenavDemo,
        ProgressBarLoopDemo,
        ProgressBarStaticDemo,
        ProgressBarStaticCardsDemo,
        ProgressBarInlineDemo,
        ProgressBarInlineCardsDemo,
        OldProgressBarCardsDemo
    ],
    exports: [
        ProgressBarExamplesDemo,
        ProgressBarColorsDemo,
        ProgressBarAnimationsDemo,
        ProgressBarCardsDemo,
        ProgressBarSidenavDemo,
        ProgressBarLoopDemo,
        ProgressBarStaticDemo,
        ProgressBarStaticCardsDemo,
        ProgressBarInlineDemo,
        ProgressBarInlineCardsDemo
    ]
})
export default class ProgressBarsDemoModule {
}
