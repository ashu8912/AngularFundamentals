import {Component,OnInit} from '@angular/core';
import { Person } from '../models/passenger.interface';
@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
    <h3>Passengers</h3>
    <passenger-count [items]="passengers"></passenger-count>
    <passenger-detail 
    *ngFor="let passenger of passengers"
    [details]="passenger"
    (edit)="handleEdit($event)"
    (remove)="handleRemove($event)">
    </passenger-detail>
    
    </div>`
})
export class PassengerDashboardComponent implements OnInit{
    passengers:Person[];
    ngOnInit()
    {console.log('ngOninit life cycle hook');
        this.passengers=[{
            id:1,
            name:"Ashu",
            checkedIn:true,
            checkInDate:1489129012902
          },{
            id:2,
            name:"Todd",
            checkedIn:true,
            checkInDate:1432601212902
          },{
            id:3,
            name:"Bravo",
            checkedIn:false,
            checkInDate:148299999902
          },{
            id:4,
            name:"Kohli",
            checkedIn:false
          }]
    }
   handleRemove(event)
   {
       this.passengers=this.passengers.filter((passenger)=>passenger.id!==event.id
       )

       console.log(this.passengers);
   } 
   handleEdit(event)
   {
    const index=this.passengers.indexOf(event.id);
    const passengers=[...this.passengers]
    passengers[index]=event;
     this.passengers=[...passengers];
   }
}