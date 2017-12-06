import {Injectable, OnInit} from '@angular/core';
import {Organisation} from '../../models/organisation';
import { BehaviorSubject } from 'rxjs';
import {Adresse} from '../../models/Adresse';
import {Comment} from '../../models/Comment';
import {Personne} from '../../models/Personne';

@Injectable()
export class OrgService implements OnInit {
  public Orgs: BehaviorSubject<Organisation[]> = new BehaviorSubject(null);

  constructor() {
    const user = new Personne('Wilson Nicky', '', 'niki.wil@gmail.com', '07 25 36 28 24', 'Enseignant', 'Nancy', 'https://www.nancy.fr/fileadmin/_processed_/6/2/csm_2016-06-inauguration-creche-familiale_c2d58cb2af.jpg', '');
    const adr = new Adresse ('Laxoviennes', 54520, 'vendoeuvres');
    const comments = new Comment(  3, 'Crèche à service moyen', user);

    this.Orgs.next(
      [
        new Organisation('Crèche les petits malins',
                         '23, site province, Laxou, 54520',
                         'http://www.rue89strasbourg.com/wp-content/uploads/2012/04/creche_parentale-UNE-464x309.jpg',
                         'petitsmalins@gmail.com', '06 05 89 32 36', 'http://www.rue89strasbourg.com',
                          new Adresse ('Laxoviennes', 54520, 'vendoeuvres'),
                          'établissement accueille des enfants de 10 semaine(s) à 4 an(s)',
                            0,
                          'Tous les jours de 8h à 18h. Exeption samedi et dimanche',
                          'Enfant pas atteind par une maladie contagieuse',
                           20,
                           '6', null),
                          new Organisation('Crèche hello kids',
                            '80, Malzéville, Nancy, 54540',
                            'http://www.franchise-enfants.fr/images/zoom/ouvrir-une-micro-creche.jpg',
                            'hello.kids@gmail.com', '06 05 00 32 16',
                            'http://www.rue89strasbourg.com',
                            new Adresse ('80, Malzéville', 54540, 'vendoeuvres'),
                            'établissement accueille des enfants de 10 semaine(s) à 4 an(s)',
                              0, 'Tous les jours de 8h à 18h. Exeption dimanche',
                              'Sans conditions particulières', 20, '6', null),

  ]
  );

     }

  ngOnInit() {
  }

  getListOrg(): BehaviorSubject<Organisation[]> {
    return this.Orgs;
  }

  getOrgByIndex(id: number): Organisation {
    let o: Organisation;
    this.Orgs.subscribe( valeur => {
      o = valeur[id];
    });
    return o;
  }

  createOrg(org: Organisation): void {
    this.Orgs.subscribe( valeur => {
      valeur.push(org);
    });

  }

  addComment(comment: Comment, index: number): void {
    this.Orgs.subscribe( valeur => {
      if (valeur[index].comments === null) {
        valeur[index].comments = [];
      }
      valeur[index].comments.push(comment);
    });
  }

}
