import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ActivitiesPage } from './pages/activities/activities.page';
import { MenuComponent } from 'src/app/shared/componentes/menu/menu.component';
import { PaymentPage } from './pages/payments/payment.page';
import { CanActiveGuard } from 'src/app/shared/services/can-active-guard.service';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        canActivate: [CanActiveGuard],
        children: [
            {
                path: '',
                redirectTo: 'principal',
                pathMatch: 'full'
            },
            {
                path: 'principal',
                component: HomePage
            },
            {
                path: 'activities',
                component: ActivitiesPage
            },
    {
        path: 'payments',
        component: PaymentPage
    }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
