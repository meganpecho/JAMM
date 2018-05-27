import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-meridian',
  templateUrl: './timepicker-meridian.component.html'
})
export class NgbdTimepickerMeridianComponent {
  currTime = new Date();
  
  time = {hour: this.currTime.getHours(), minute: this.currTime.getMinutes(), second: this.currTime.getSeconds()};
  
  meridian = true;
}