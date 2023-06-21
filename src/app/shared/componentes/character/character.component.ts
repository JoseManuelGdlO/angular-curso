import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICharacter } from "../../interfaces/characters.interface";

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

    @Input() character!: ICharacter
}
