import {Component, Input} from '@angular/core';
import { Person } from '../../models/passenger.interface';

@Component({
    selector:'passenger-detail',
    template:`<h3>
    <span class="status" [ngClass]="{
      'checked-in':details.checkedIn
    }"></span>{{details.name}}
    <h3>CheckInDate {{
      details.checkInDate?(details.checkInDate | date:'yMMMMd'):'Not Checked In'}}</h3>
    <p>{{details | json}}</p>
    </h3>`,
    styleUrls:['passenger-detail.component.scss']
})
export class PassengerDetailComponent{
@Input()
details:Person;
}