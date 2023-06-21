import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

fdescribe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [CommonModule, FormsModule]
        }).compileComponents()
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create login page', () => {
      expect(component).toBeTruthy();  
    })

    it('correct show html', () => {
        const titleElement = fixture.nativeElement.querySelector('.title');
        expect(titleElement.textContent).toContain('Hola Jose');
    })

    it('change title and show in html', () => {
        component.title = 'Hola Manuel';
        fixture.detectChanges();
        const titleElement = fixture.nativeElement.querySelector('.title');
        expect(titleElement.textContent).toContain('Hola Manuel');
    });

    it('should show content when showContent bool is true', () => {
        const contentElement = fixture.nativeElement.querySelector('.content')
        expect(contentElement).toBeTruthy();
    })

    it('should not show content when showContent bool is false', () => {
        component.showContent = false;
        fixture.detectChanges();
        const contentElement = fixture.nativeElement.querySelector('.content')
        expect(contentElement).toBeFalsy();
    });

    it('show button when showButton bool is true', () => {
        component.showButton = true
        fixture.detectChanges();
        const buttonElement = fixture.nativeElement.querySelector('.button')
        expect(buttonElement).toBeTruthy();
    });

    it('should not show button when showButton bool is false', () => {
        const buttonElement = fixture.nativeElement.querySelector('.button')
        expect(buttonElement).toBeFalsy();
    })

    it('button call emitter', () => {
        spyOn(component.buttonClick, 'emit');
        component.showButton = true
        fixture.detectChanges();

        const buttonElement =  fixture.nativeElement.querySelector('.button')
        buttonElement.click();

        expect(component.buttonClick.emit).toHaveBeenCalled();
    })


});