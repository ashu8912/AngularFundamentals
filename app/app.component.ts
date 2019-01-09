import {Component} from '@angular/core';
@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  template:`<div>
  {{title}}{{numberOne+numberTwo}}{{isHappy?':)':':('}}</div>`
})
export class AppComponent{
  title:string;
  numberOne:number=1;
  numberTwo:number=2;
  isHappy:boolean=false;
  constructor()
  {
    this.title="First Angular Component";
  }
}