import {Injectable, OnInit} from '@angular/core';
import {Organisation} from '../../models/organisation';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Comment} from '../../models/Comment';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from '../abstract/abstract.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/filter';
import {Nursery} from '../../interfaces/nursery';


@Injectable()
export class OrgService extends AbstractService implements OnInit {
  public Orgs: BehaviorSubject<Organisation[]> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) {
    super();
  }

  ngOnInit() {
  }

  getListOrg(): Observable<any> {
    return this._http.get<Nursery>(this._backendURL.allNurseries, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  fetchAll(): Observable<any> {
    return this._http.get<Nursery[]>(this._backendURL.allNurseries, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  fetchOne(id: string): Observable<any> {
    return this._http.get<Nursery>(this._backendURL.oneNursery.replace(':id', id), this._options());
  }

  create(nursery: Nursery): Observable<any> {
    return this._http.post(this._backendURL.allNurseries, nursery, this._options());
  }

  update(nursery: Nursery): Observable<any> {
    return this._http.put(this._backendURL.oneNursery.replace(':id', nursery.id), nursery, this._options());
  }

  delete(id: string): Observable<any> {
    return this._http.delete(this._backendURL.oneNursery.replace(':id', id), this._options());
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
        valeur[index].comments = [comment];
      }else {
        valeur[index].comments.push(comment);
      }
    });
  }

}
