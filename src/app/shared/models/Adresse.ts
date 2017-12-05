export class Adresse {
  public street: string;
  public postalCode: number;
  public city: string;

  constructor (street: string, postalCode: number, city: string) {
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
  }

}
