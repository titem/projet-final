import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Organisation} from '../../shared/models/organisation';
import {OrgService} from '../../shared/services/org-service/org-service.component';
import {ActivatedRoute, Router} from '@angular/router';
import {LogService} from '../../shared/services/log-service/log-service.component';
import {Comment} from "../../shared/models/Comment";
import {Personne} from "../../shared/models/Personne";


@Component({
  selector: 'app-org-details',
  templateUrl: './org-details.component.html',
  styleUrls: ['./org-details.component.css']
})
export class OrgDetailsComponent implements OnInit {

  public org: Organisation;
  public user: Personne;
  @ViewChild('comment') public el: ElementRef;

  public infoSection: boolean;
  public commenter: boolean;

  constructor(private orgService: OrgService, private router: Router, private activatedRoute: ActivatedRoute,
              private personeService: LogService) {
    this.infoSection = false;
    this.commenter = false;
    this.personeService.getCurrentUser().subscribe(value => {
      this.user = value;
    });
  }

  ngOnInit() {
    this.org = this.orgService.getOrgByIndex(this.activatedRoute.snapshot.params.index);

  }

  ajouterCommentaire() {
    this.commenter = true;
  }

  saveComment(): void {

    console.log(this.user + 'txt' + this.el.nativeElement.value + 'index' + this.activatedRoute.snapshot.params.index);

    this.orgService.addComment(new Comment(5, this.el.nativeElement.value, this.user), this.activatedRoute.snapshot.params.index );

    this.commenter = false;
    //this.router.navigate(['espaceCreche/detail', this.activatedRoute.snapshot.params.index]);
  }
}
