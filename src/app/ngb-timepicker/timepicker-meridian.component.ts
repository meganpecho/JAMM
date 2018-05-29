import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-meridian',
  templateUrl: './timepicker-meridian.component.html'
})
export class NgbdTimepickerMeridianComponent implements OnInit {
  currTime = new Date();
  
  constructor() { }
  
  time = {hour: this.currTime.getHours(), minute: this.currTime.getMinutes(), second: this.currTime.getSeconds()};
  
  meridian = true;
  
  ngOnInit() {
  }
}