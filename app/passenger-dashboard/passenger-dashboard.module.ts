import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {PassengerDashboardComponent} from './containers/passenger-dashboard.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDashboardService} from './passenger-dashboard.service';
@NgModule({
    declarations:[PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent],
    imports:[CommonModule],
    providers:[PassengerDashboardService],
    exports:[PassengerDashboardComponent]
})
export class PassengerDashboardModule{};