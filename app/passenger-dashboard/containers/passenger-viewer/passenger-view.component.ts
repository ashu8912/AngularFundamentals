import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import {Person} from '../../models/passenger.interface';
import 'rxjs/add/operator/switchMap';
@Component({
    selector:'passenger-view',
    template:`<h1>Passenger View <passenger-form [detail]="passenger">
    </passenger-form></h1>`,
    styleUrls:['passenger-view.component.scss']
})
export class PassengerViewComponent implements OnInit{
    constructor(private route:ActivatedRoute,private router:Router,private passengerService:PassengerDashboardService){
    }
    passenger:Person;
    ngOnInit(){
        this.route.params.switchMap((data:Person)=>{
            return this.passengerService.getPassenger(data.id)
        })
        .subscribe((data:Person)=>{
            this.passenger=data;
           })
    }
}