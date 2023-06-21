import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-curso';

  sum(a: number, b: number): number {
    return a + b;
  }

  validatePassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    }

    if (!/\d/.test(password)) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }

    return true;
  }

  discountAmount = 0
  discountedPrice = 0

  calculateDiscountPrice(price: number, discount: string): number {
    let discountPercentaje = 0;

    if(discount === 'SALE20') {
      discountPercentaje = 20;
    } else if (discount === 'SALE30') {
      discountPercentaje = 30;  
    } else if (discount === 'SALE50') {
      discountPercentaje = 50;
    }

    this.discountAmount = (price * discountPercentaje) / 100;
    this.discountedPrice = price - this.discountAmount;

    return this.discountedPrice;

  }
  
}
