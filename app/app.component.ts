import {Component} from '@angular/core';

interface Person{
  id:number;
  name:string;
  checkedIn:boolean;
  checkInDate?:number;
}



@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  template:`<div>
  <h1 [innerHTML]="title"></h1>
  <h1>{{title}}</h1>
  <input type="text" placeholder="one way binding" 
  [ngModel]="name" (ngModelChange)="handleInput($event)"/>
 <input type="text" [(ngModel)]="name" 
 placeholder="two way binding"/>
 <input type="text" [value]="name" (input)="handleInput(userName.value)" 
 #userName placeholder="template ref"/>
 <div *ngIf="name.length">
 Searching.... {{name}}
 </div>
  {{name}}
  {{numberOne+numberTwo}}{{isHappy?':)':':('}}</div>
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
`

})
export class AppComponent{
  title:string;
  name:String="";
  numberOne:number=1;
  numberTwo:number=2;
  isHappy:boolean=false;
  passengers:Person[]=[{
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
  constructor()
  {
    this.title="First Angular Component";
  }
  handleInput(value:string){
  this.name=value;
  }
}