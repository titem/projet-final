import {Comment} from './Comment';
import {Adresse} from './Adresse';

export class Organisation {
  public id: string;
  public name: string;
  public img: string;
  public email: string;
  public phone: string;
  public website: string;
  public adresse: string;
  public address: Adresse;
  public description: string;
  public staffNumber: number;
  public openingHours: string;
  public admissionConditions: string;
  public capacity: number;
  public ageLimits: string;
  public comments: Comment[];


  constructor(name: string,
              adresse: string,
              img: string,
              email: string,
              phone: string,
              website: string,
              address: Adresse,
              description: string,
              staffNumber: number,
              openingHours: string,
              admissionConditions: string,
              capacity: number,
              ageLimits: string,
              comments: Comment[]) {
    this.name = name;
    this.adresse = adresse;
    this.img = img;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.description = description;
    this.staffNumber = staffNumber;
    this.openingHours = openingHours;
    this.admissionConditions = admissionConditions;
    this.capacity = capacity;
    this.ageLimits = ageLimits;
    this.comments = comments;
  }

}

