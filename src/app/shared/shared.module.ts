import { CommonModule, TitleCasePipe } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonaComponent } from "./componentes/persona/persona.component";
import { EjercicioUnoComponent } from "./componentes/ejercicio-uno/ejercicio-uno.component";
import { PrefixPipe } from "./pipes/prefix.pipe";
import { SelectionDirective } from "./directives/seleccionar.directive";
import { TitlecaseDirective } from "./directives/title-case-directive";
import { MenuComponent } from "./componentes/menu/menu.component";
import { RouterModule } from "@angular/router";
import { CharacterComponent } from "./componentes/character/character.component";

@NgModule({
    declarations: [
        PersonaComponent,
        SelectionDirective,
        MenuComponent,
        EjercicioUnoComponent,
        TitlecaseDirective,
        CharacterComponent,
        PrefixPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
        TitleCasePipe
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        PersonaComponent,
        EjercicioUnoComponent,
        SelectionDirective,
        TitlecaseDirective,
        CharacterComponent,
        PrefixPipe,
        MenuComponent
    ]
})
export class SharedModule { } 