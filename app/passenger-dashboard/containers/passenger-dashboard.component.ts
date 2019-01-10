import {Component,OnInit} from '@angular/core';
import { Person } from '../models/passenger.interface';
import { PassengerDashboardService } from '../passenger-dashboard.service';
@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
    <h3>Passengers</h3>
    <passenger-count [items]="passengers"></passenger-count>
    <div *ngFor="let passenger of passengers">
    {{passenger.name}}
    </div>
    <passenger-detail 
    *ngFor="let passenger of passengers"
    [details]="passenger"
    (edit)="handleEdit($event)"
    (remove)="handleRemove($event)">
    </passenger-detail>
    
    </div>`
})
export class PassengerDashboardComponent implements OnInit{
    passengers:Person[]=[];
    constructor(private passengerService:PassengerDashboardService){

    }
    ngOnInit()
    {console.log('ngOninit life cycle hook');
        this.passengerService.getPassengers().subscribe((data:Person[])=>this.passengers=data);
    }
   handleRemove(event)
   {
       this.passengers=this.passengers.filter((passenger)=>passenger.id!==event.id
       )

       console.log(this.passengers);
   } 
   handleEdit(event)
   {console.log(event);
    const index=this.passengers.findIndex((passenger)=>passenger.id===event.id);
    console.log(index);
    const passengers=[...this.passengers]
    passengers[index]=event;
     this.passengers=[...passengers];
     console.log(this.passengers);
   }
}