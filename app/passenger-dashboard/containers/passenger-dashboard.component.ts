import {Component,OnInit} from '@angular/core';
import { Person } from '../models/passenger.interface';
@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
    <h3>Passengers</h3>
  <ul>
  <li *ngFor="let passenger of passengers;let i=index">
  <span class="status" [ngClass]="{
    'checked-in':passenger.checkedIn
  }"></span>{{passenger.name}}
  <h3>CheckInDate {{
    passenger.checkInDate?(passenger.checkInDate | date:'yMMMMd'):'Not Checked In'}}</h3>
  <p>{{passenger | json}}</p>
  </li>
  </ul>
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
            id:1,
            name:"Bravo",
            checkedIn:false,
            checkInDate:148299999902
          },{
            id:1,
            name:"Kohli",
            checkedIn:false
          }]
    }
    
}