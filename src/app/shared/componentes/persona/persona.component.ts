import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-persona',
    templateUrl: './persona.component.html',
    styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {

    @Input() name = '';
    @Output() onClick = new EventEmitter();

    click() {
        this.onClick.emit(this.name);
    }
}