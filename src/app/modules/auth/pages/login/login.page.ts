import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from "rxjs";
import { TimeInterval } from "rxjs/internal/operators/timeInterval";
import { AuthService } from "src/app/shared/services/auth.service";
import { InfoService } from "src/app/shared/services/info.service";
import { LoggerService } from "src/app/shared/services/logger.service";
import { ParseKMToMilesService } from "src/app/shared/services/transformkmtomiles.service";
import { environment } from "src/environments/environment";

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

    style = {'color': 'red', 'font-size': '20px'}
    personas = [
        { name: 'Manuel', type: 'estudiante', active: true },
        { name: 'Jose', type: 'maestro', active: true },
        { name: 'Josue', type: 'directivo', active: true },
    ]

    count = 0

    name!: string

    email!: string
    password!: string

    title = 'Hola Jose'
    content = 'Curso de Angular Avanzado'
    showContent = true
    showButton = false

    environmentTitle = environment.titlePrincipal

    @Output() buttonClick = new EventEmitter();

    constructor(
        public logger: LoggerService,
        public infoService: InfoService,
        public authService: AuthService,
        public parseKm: ParseKMToMilesService,
        public router: Router,
        private _snackBar: MatSnackBar
        ){}

    ngOnInit(): void {
       this.authService.init()
       this._snackBar.open('Bienvenido a la app', 'Cerrar');

        const subscription = this.authService.contadorObservable.subscribe((value) => {
           // console.log(value) 
            this.count = value 
        })

    }

    onClick() {
        this.buttonClick.emit();
    }

    clickParent(nombre: string) {
        this.logger.log('click a componente hijo ' + nombre, 'debug');
        
    }
    sendRegister() {
        this.router.navigate(['/auth/register']);
    }

    async login() {
    try {
       const result = await this.authService.login(this.email, this.password)
       console.log(result);

    } catch (error) {
        console.log(error);
        
    }
       
    }

}