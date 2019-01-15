import {Component, Input} from '@angular/core';
import {Person} from '../../models/passenger.interface';
@Component({
selector:'passenger-form',
template:`<form #form="ngForm">
{{detail | json}}
<div>
<input type="text" name="name" [ngModel]="detail?.name"/>
</div>
<div>
<label>Yes <input type="radio" 
name="checkedIn" [value]="true" [ngModel]="detail?.checkedIn"
(ngModelChange)="toggleCheckedIn($event)"></label>
<label>No <input type="radio" 
name="checkedIn" [value]="false"
ngModel
(ngModelChange)="toggleCheckedIn($event)"></label>

</div>
<div *ngIf="detail?.checkedIn">
<input [value]="detail?.checkInDate" type="number" 
name="checkInDate"/>
</div>
{{form.value | json}}
</form>`,
styleUrls:['passenger-form.component.scss']
})
export class PassengerFormComponent{
    @Input()
    detail:Person;
    toggleCheckedIn(checkedIn:boolean){
        if(checkedIn){
            let checkInDate=Date.now();
            this.detail={...this.detail,checkInDate}
        }
         this.detail={...this.detail,checkedIn}
    }
}