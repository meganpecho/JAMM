import { Component, OnInit } from '@angular/core';
import { NgbdModalComponent } from '../ngb-modal/modal.component';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateUSParserFormatter } from '../ngb-datepicker/ngb-date-us-parser-formatter';
import { NgbdDatepickerPopupComponent } from '../ngb-datepicker/datepicker-popup.component';
import { NgbdTimepickerMeridianComponent } from '../ngb-timepicker/timepicker-meridian.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateUSParserFormatter}]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
