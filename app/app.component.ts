import {Component} from '@angular/core';

@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  template:`
  <div>
  <a routerLink="/" routerLinkActive="active">
  Home
  </a>
  <a routerLink="/404" routerLinkActive="active">
  404
  </a>
  </div>
  <hr/>
  <router-outlet>
  
  </router-outlet>`

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