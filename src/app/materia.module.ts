import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [MatCardModule, MatSnackBarModule, MatButtonModule, MatProgressSpinnerModule],
    exports: [MatCardModule, MatSnackBarModule, MatButtonModule, MatProgressSpinnerModule],
})
export class MateriaModule { }