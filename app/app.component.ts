import {Component} from '@angular/core';

interface Person{
  id:number;
  name:string;
  checkedIn:boolean;
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
    checkedIn:true
  },{
    id:2,
    name:"Todd",
    checkedIn:true
  },{
    id:1,
    name:"Bravo",
    checkedIn:false
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