import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Organisation} from '../../shared/models/organisation';
import {OrgService} from '../../shared/services/org-service/org-service.component';
import {ActivatedRoute, Router} from '@angular/router';
import {LogService} from '../../shared/services/log-service/log-service.component';
import {Comment} from '../../shared/models/Comment';
import {Personne} from '../../shared/models/Personne';
import {Nursery} from '../../shared/interfaces/nursery';

import 'rxjs/add/operator/mergeMap';


@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {

  nursery: Nursery;
  user: Personne;
  @ViewChild('comment') public el: ElementRef;

  infoSection: boolean;
  commenter: boolean;

  constructor(private nurseryService: OrgService, private router: Router, private activatedRoute: ActivatedRoute,
              private userService: LogService) {
    this.infoSection = true;
    this.commenter = false;
    this.userService.getCurrentUser().subscribe(value => {
      this.user = value;
    });
  }

  ngOnInit() {
    this.activatedRoute.params
      .flatMap(params => this.nurseryService.fetchOne(params['id']))
      .subscribe(_ => this.nursery = _);
  }

  ajouterCommentaire() {
    this.commenter = true;
  }

  saveComment(): void {

    console.log(this.user + 'txt' + this.el.nativeElement.value + 'index' + this.activatedRoute.snapshot.params.index);

    this.nurseryService.addComment(new Comment(5, this.el.nativeElement.value, this.user), this.activatedRoute.snapshot.params.index );

    this.commenter = false;
    // this.router.navigate(['espaceCreche/detail', this.activatedRoute.snapshot.params.index]);
  }
}
