import {Person} from './models/passenger.interface';
export class PassengerDashboardService{
constructor(){}
getPassengers():Person[]{
    return [{
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
        id:3,
        name:"Bravo",
        checkedIn:false,
        checkInDate:148299999902
      },{
        id:4,
        name:"Kohli",
        checkedIn:false
      }]
}
}