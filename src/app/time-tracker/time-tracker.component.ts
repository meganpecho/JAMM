import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css']
})
export class TimeTrackerComponent implements OnInit {
  hello = "hello";
  startDate;
  endDate;
  difference = 0;

  startCounter() {
    let currentDate = new Date();
    this.startDate = currentDate;
  }

  stopCounter() {
    let currentDate = new Date();
    this.endDate = currentDate;
    // console.log("start date was: " + this.startDate);
    // console.log("end date was: " + this.endDate);
    this.difference = this.endDate - this.startDate;
    // console.log("difference is: "  + this.difference);
  }

  constructor() { }

  ngOnInit() {
  }

}
