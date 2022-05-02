// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { MapClass } from './MapClass';

const customMap = new MapClass('map');

const user = new User();
customMap.addMarker(user);
console.log(user);

const company = new Company();
customMap.addMarker(company);
console.log(company);

const toRadians = (x : User | Company) : void => {
  x.location.lat = ((x.location.lat*22)/1260);
  x.location.long = ((x.location.long*22)/1260);
}
toRadians(user);
toRadians(company);

const distance = Math.acos((Math.sin(user.location.lat) * Math.sin(company.location.lat)) 
                            + Math.cos(user.location.lat) * Math.cos(company.location.lat) * Math.cos(company.location.long - user.location.long));
const dtInKm = distance*3963.0*1.609344;
document.getElementById('distance').innerHTML += `Distance between the two Marker is ${Math.round(dtInKm)}Km`;