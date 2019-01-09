import {Component} from '@angular/core';
@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  template:`<div>
  <h1 [innerHTML]="title"></h1>
  <h1>{{title}}</h1>
  <input type="text" [value]="name" (input)="handleInput($event)"/>
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
  handleInput(event:any){
  this.name=event.target.value;
  }
}