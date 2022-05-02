import faker from 'faker';
import { Mappable } from './MapClass';

export class User implements Mappable{
  name : string;
  location : {
    lat : number;
    long : number;
  };
  color : string;
  markerContent () : string {
    return `
      <p>User Name : ${this.name}<p>
      `;
  }
  constructor () {
    this.name = faker.name.firstName();
    this.location = {
      lat : parseFloat(faker.address.latitude()),
      long : parseFloat(faker.address.longitude())
    }
  };
}