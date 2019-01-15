import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Person } from '../models/passenger.interface';
import { PassengerDashboardService } from '../passenger-dashboard.service';
@Component({
    selector:'passenger-dashboard',
    styleUrls:['passenger-dashboard.component.scss'],
    template:`
    <div>
    <h3>Passengers</h3>
    <passenger-count [items]="passengers"></passenger-count>
    <div *ngFor="let passenger of passengers">
    {{passenger.name}}
    </div>
    <passenger-detail 
    *ngFor="let passenger of passengers"
    [details]="passenger"
    (edit)="handleEdit($event)"
    (remove)="handleRemove($event)"
    (view)="viewPassenger($event)"
    >
    </passenger-detail>
    
    </div>`
})
export class PassengerDashboardComponent implements OnInit{
    passengers:Person[]=[];
    constructor(private router:Router,private passengerService:PassengerDashboardService){

    }
    ngOnInit()
    {console.log('ngOninit life cycle hook');
        this.passengerService.getPassengers().subscribe((data:Person[])=>this.passengers=data);
    }
   handleRemove(event)
   {
       this.passengerService.removePassenger(event).subscribe((data:Person)=>{
        this.passengers=this.passengers.filter((passenger)=>passenger.id!==event.id)
       },(error:any)=>{
           console.log("there is an error",error);
       })
   } 
   handleEdit(event)
   {
    this.passengerService.updatePassenger(event).subscribe((data:Person)=>{
        console.log(data);
        const index=this.passengers.findIndex((passenger)=>passenger.id===data.id);
        const passengers=[...this.passengers]
        passengers[index]=data;
         this.passengers=[...passengers];
        
    })
    
   }
   viewPassenger(event){
       this.router.navigate(['/passengers',event.id]);
   }
}