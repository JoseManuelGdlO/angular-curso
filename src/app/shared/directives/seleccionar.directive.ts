import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[LabelSeleccionado]'
})
export class SelectionDirective {

    constructor(private el: ElementRef){}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}