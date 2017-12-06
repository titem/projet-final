import { Injectable, OnInit} from '@angular/core';
import {Personne} from '../../models/Personne';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LogService implements OnInit {

  public user: BehaviorSubject<Personne> = new BehaviorSubject(null);
  public users: BehaviorSubject<Personne[]> = new BehaviorSubject(null);


  constructor() {
    this.user.next(new Personne( 'Wilson', 'Nicky', 'niki.wil@gmail.com', '07 25 36 28 24', 'Enseignant', 'Nancy',
      'https://www.nancy.fr/fileadmin/_processed_/6/2/csm_2016-06-inauguration-creche-familiale_c2d58cb2af.jpg', ''));

    this.users.next([
      new Personne( 'Wilson', 'Nicky', 'niki.wil@gmail.com', '07 25 36 28 24', 'Enseignant', 'Nancy',
        'https://www.nancy.fr/fileadmin/_processed_/6/2/csm_2016-06-inauguration-creche-familiale_c2d58cb2af.jpg', ''),
      new Personne( 'Wilson', 'Nicky', 'niki.wil@gmail.com', '07 25 36 28 24', 'Enseignant', 'Nancy',
        'https://www.nancy.fr/fileadmin/_processed_/6/2/csm_2016-06-inauguration-creche-familiale_c2d58cb2af.jpg', '')
    ]);
  }

  ngOnInit() {
  }



  getCurrentUser(): BehaviorSubject<Personne> {
    return this.user;
  }

  setCurrentUser(user: Personne): void {
    this.user.next(user);
  }
}
