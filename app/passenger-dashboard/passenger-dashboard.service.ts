import {Person} from './models/passenger.interface';
import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
const PASSENGER_API="/api/passengers";
@Injectable()
export class PassengerDashboardService{
constructor(private http:Http){}
getPassengers():Observable<Person[]>{
    return this.http.get(PASSENGER_API).map((response:Response)=>{
        return response.json();
    })
}
updatePassenger(passenger):Observable<Person>{
    return this.http.put(`${PASSENGER_API}/${passenger.id}`,passenger).map((response:Response)=>{
        return response.json();
    })
}
removePassenger(passenger):Observable<Person>{
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`).map((response:Response)=>{
        return response.json();
    })
}
}