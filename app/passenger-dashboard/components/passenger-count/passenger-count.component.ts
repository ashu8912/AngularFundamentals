import {Component,Input} from '@angular/core';
import { Person } from '../../models/passenger.interface';

@Component({
    selector:'passenger-count',
    template:`<h3>Total Passengers checked In:{{countCheckedInPassengers()}}/{{items.length}}</h3>`,
    styleUrls:[]
})
export class PassengerCountComponent{
    @Input()
    items:Person[];
    countCheckedInPassengers(){
        return this.items.filter((passenger)=>passenger.checkedIn).length;
    }
}