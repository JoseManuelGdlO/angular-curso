import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './shared/services/user.service';


class MockRouter { public navigate() { }; }

describe('AppComponent', () => {

  const text = 'angular-curso';

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterModule],
    providers: [
      { provide: Router, useClass: MockRouter },
      RouterModule    ],
  }));

  it('Test sum function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.sum(2,2)).toBeGreaterThan(3);
  });

  it('should create the app', () => {
    // !Arrange
    const fixture = TestBed.createComponent(AppComponent);

    // !Act
    const app = fixture.componentInstance;

    // !Assert
    expect(app).toBeTruthy();
  });


  it('debe contener este texto', () => {
    expect(text).toMatch(/curso/);
  });

  it('no debe tener el siguiente texto', () => {
    expect(text).not.toMatch(/react/)
  })

  it('comporbar el tamaño', () => {
    expect(text).toHaveSize(13)
  })

  it('Mayyor que', () => {
    expect(numbers(2,2)).toBeGreaterThan(3)
  })

  it('Mayor que o igual', () => {
    expect(numbers(2,2)).toBeGreaterThanOrEqual(4)
  })

  it('Menor que', () => {
    expect(numbers(2, 2)).toBeLessThan(5)
  })

  it('Menor igual que', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(5)
  })

  it('Deberia recibir informacion de la API', async () => {
    // !Arrange
    const httpClientMock = new HttpClientMock();
    const userService =  new UserService(httpClientMock as any);
    // !Act
    const user =  await userService.getUsers();

    // !Assert
    expect(user).toEqual({ id:1, name: 'manuel'})
  })

});

export const numbers = (a: number, b:number) => a + b;

export class HttpClientMock {
  async get(url: string) : Promise<any> {
    // Simulacion de la respuesta de la API
    const data = { id:1, name: 'manuel'}
    return {data}
  }

  async post(url: string, body: any): Promise<any> {
    // Simulacion de la respuesta de la API
    const data = { id: 1, name: 'manuel' }
    return { data }
  }
}
