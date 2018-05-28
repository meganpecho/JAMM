import {Component,OnInit} from '@angular/core';
import {datepickerModel} from './datepicker-model';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.component.html'
})
export class NgbdDatepickerPopupComponent implements OnInit {
  pickerModel:datepickerModel;
  currDate;
  
  constructor() { }
  
  ngOnInit()
  {
	  this.pickerModel = new datepickerModel();
	  this.currDate = new Date();
	  this.pickerModel.month = this.currDate.getMonth() + 1;
	  this.pickerModel.day = this.currDate.getDate();
	  this.pickerModel.year = this.currDate.getFullYear();
  }
}