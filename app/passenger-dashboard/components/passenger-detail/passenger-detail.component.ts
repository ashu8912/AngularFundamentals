import {Component, Input,Output,OnChanges,EventEmitter} from '@angular/core';
import { Person } from '../../models/passenger.interface';

@Component({
    selector:'passenger-detail',
    template:`
    <div *ngIf="editing">
    <input type="text" [value]="details.name"
    (input)="onPassengerNameChange(name.value)"
    #name>
    </div>
    <div *ngIf="!editing">
    <span class="status" [ngClass]="{
      'checked-in':details.checkedIn
    }"></span>{{details.name}}</div>
    <h3>CheckInDate {{
      details.checkInDate?(details.checkInDate | date:'yMMMMd'):'Not Checked In'}}</h3>
    <p>{{details | json}}</p>
    <button (click)="toggleEdit()">{{editing?'Done':'Edit'}}</button>
    <button
    (click)="handleRemove()">Remove</button>
    <button (click)="viewPassenger()">View Passenger</button>
    `,
    styleUrls:['passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnChanges{
@Input()
details:Person;
editing:boolean=false;
@Output()
edit:EventEmitter<Person>=new EventEmitter();
@Output()
remove:EventEmitter<Person>=new EventEmitter(); 
@Output()
view:EventEmitter<Person>=new EventEmitter();
ngOnChanges(changes)
{
    if(changes.details)
    {
        this.details=Object.assign({},changes.details.currentValue);
    }
    console.log(changes);
    
}
onPassengerNameChange(value){
    this.details.name=value;
    //={...this.details,name:value}; 
}
toggleEdit(){
    if(this.editing)
    {
        this.edit.emit(this.details);
    }
    this.editing=!this.editing;
}
viewPassenger(){
this.view.emit(this.details);
}
handleRemove(){
this.remove.emit(this.details);
}
}