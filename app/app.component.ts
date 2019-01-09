import {Component} from '@angular/core';
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
  {{name}}
  {{numberOne+numberTwo}}{{isHappy?':)':':('}}</div>`
})
export class AppComponent{
  title:string;
  name:String="";
  numberOne:number=1;
  numberTwo:number=2;
  isHappy:boolean=false;
  constructor()
  {
    this.title="First Angular Component";
  }
  handleInput(value:string){
  this.name=value;
  }
}