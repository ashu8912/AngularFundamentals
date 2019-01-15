import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {PassengerDashboardComponent} from './containers/passenger-dashboard.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDashboardService} from './passenger-dashboard.service';
import { PassengerViewComponent } from './containers/passenger-viewer/passenger-view.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';
@NgModule({
    declarations:[PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent,
        PassengerFormComponent,
    PassengerViewComponent],
    imports:[CommonModule,HttpModule,FormsModule],
providers:[PassengerDashboardService],
    exports:[PassengerDashboardComponent]
})
export class PassengerDashboardModule{};