import {Personne} from './Personne';

export class Comment {
  public id: string;
  public user: Personne | string;
  public rating: number;
  public text: string;

  constructor(rating: number, text: string, user: Personne) {
    this.rating = rating;
    this.text = text;
    this.user = this.user;
  }

}
