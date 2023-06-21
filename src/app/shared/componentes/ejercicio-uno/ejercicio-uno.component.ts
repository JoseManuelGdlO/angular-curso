import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ejercicio-uno',
    templateUrl: './ejercicio-uno.component.html',
    styleUrls: ['./ejercicio-uno.component.scss']
})
export class EjercicioUnoComponent {

    @Input() name = '';

}