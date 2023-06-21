import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomePage } from "./pages/home/home.page";
import { HomeRoutingModule } from "./home-routing.module";
import { ActivitiesPage } from "./pages/activities/activities.page";
import { PaymentPage } from "./pages/payments/payment.page";
import { CanActiveGuard } from "src/app/shared/services/can-active-guard.service";

@NgModule({
    declarations: [
        HomePage,
        ActivitiesPage,
        PaymentPage
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        CanActiveGuard
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomeModule { }