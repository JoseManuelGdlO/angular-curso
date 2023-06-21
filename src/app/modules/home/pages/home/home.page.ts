import { Component, OnInit } from "@angular/core";
import { ICharacter } from "src/app/shared/interfaces/characters.interface";
import { HomeService } from "src/app/shared/services/home.service";

@Component({
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

    characters: Array<ICharacter> = []

    constructor(
        public homeService: HomeService
    ) { }

    ngOnInit() {
        this.getCharacters()
    }

    async getCharacters() {
        try {
            this.characters = await this.homeService.getCharacters();
            console.log(this.characters);
            
            
        } catch (error) {
            console.log(error);
        }
    }

}
