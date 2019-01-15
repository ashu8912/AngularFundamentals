import {Component} from '@angular/core';


interface navs{
  link:string,
  name:string,
  exact:boolean
}
@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  template:`
  <div>
  <a *ngFor="let item of navs" 
  [routerLink]="item.link" routerLinkActive="active"
  [routerLinkActiveOptions]="{exact:item.exact}">
  {{item.name}}
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
  navs:navs[]=[{
    link:'/',
    exact:true,
    name:'Home'
  },{
    link:'/passengers',
    exact:false,
    name:'passengers'
  },{
    link:'/404',
    exact:false,
    name:'404'
  }]
  constructor()
  {
    this.title="First Angular Component";
  }
  handleInput(value:string){
  this.name=value;
  }
}