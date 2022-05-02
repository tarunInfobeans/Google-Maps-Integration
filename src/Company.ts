import faker from 'faker';
import { Mappable } from './MapClass';

export class Company implements Mappable{
  companyName : string;
  catchPhrase : string;
  location : {
    lat : number,
    long : number
  }
  color : string;
  markerContent () : string {
    return `
      <div>
        <h2>Company Name : ${this.companyName}</h2>
        <h4>${this.catchPhrase}</h4>
      </div>
    `;
  }
  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat : parseFloat(faker.address.latitude()),
      long : parseFloat(faker.address.longitude())
    }
  }
}