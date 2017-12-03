import { Component, OnInit } from '@angular/core';
import {Organisation} from '../shared/models/organisation';

@Component({
  selector: 'app-list-garderie',
  templateUrl: './list-garderie.component.html',
  styleUrls: ['./list-garderie.component.css']
})
export class ListGarderieComponent implements OnInit {
  Orgs: Organisation[];

  constructor() {
    this.Orgs = [
      new Organisation('nom1', 'qdfsejhliuhrg jheloufhourg', '../../assets/img/26e6ef2ef7cdfbcc47fdd880c8b303d2--modern-nursery-decor-modern-nurseries.jpg'),
      new Organisation('nom2', 'qdfsejhliuhrg jheloufhourg', 'http://www.info-chalon.com/article/media/images/0MARS2016/IMG_7517.jpg'),
      new Organisation('nom3', 'qdfsejhliuhrg jheloufhourg', '../../assets/img/26e6ef2ef7cdfbcc47fdd880c8b303d2--modern-nursery-decor-modern-nurseries.jpg'),
      new Organisation('nom4', 'qdfsejhliuhrg jheloufhourg', '../../assets/img/26e6ef2ef7cdfbcc47fdd880c8b303d2--modern-nursery-decor-modern-nurseries.jpg'),
      new Organisation('nom5', 'qdfsejhliuhrg jheloufhourg', '../../assets/img/26e6ef2ef7cdfbcc47fdd880c8b303d2--modern-nursery-decor-modern-nurseries.jpg'),
      new Organisation('nom6', 'qdfsejhliuhrg jheloufhourg', '../../assets/img/26e6ef2ef7cdfbcc47fdd880c8b303d2--modern-nursery-decor-modern-nurseries.jpg')];
  }

  ngOnInit() {
  }

}
