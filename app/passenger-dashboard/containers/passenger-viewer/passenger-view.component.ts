import {Component, OnInit} from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import {Person} from '../../models/passenger.interface';
@Component({
    selector:'passenger-view',
    template:`<h1>Passenger View <passenger-form [detail]="passenger">
    </passenger-form></h1>`,
    styleUrls:['passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit{
    constructor(private passengerService:PassengerDashboardService){
    }
    passenger:Person;
    ngOnInit(){
        this.passengerService.getPassenger(1).subscribe((data:Person)=>{
            this.passenger=data;
           })
    }
}