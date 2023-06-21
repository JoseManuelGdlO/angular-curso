import { Directive, HostListener } from '@angular/core'

import { NgControl } from '@angular/forms'

import { TitleCasePipe } from '@angular/common'

@Directive({
    selector: '[appTitleCase]'
})

export class TitlecaseDirective {
    constructor(
        public ngControl: NgControl,
        public titleCase: TitleCasePipe
    ) { }

    @HostListener('ngModelChange', ['$event'])

    onInputChange(value: string) {
        // whenever user types something in the input field, this function triggers.
        const titleCaseStr = this.titleCase.transform(value)
        this.ngControl.valueAccessor?.writeValue(titleCaseStr)
    }
}
