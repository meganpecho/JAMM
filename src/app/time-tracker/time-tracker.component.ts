import { Component, OnInit } from '@angular/core';
import { DbConnectService } from '../services/db-connect.service';
import { Timestamp } from '../models/timestamp';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {
  // "timestamps" will be acccessible from the HTML template
  timestamps: Timestamp[];
  startDate;
  endDate;
  difference = 0;

  timestamp: Timestamp = {
    end_time: '',
    start_time: '',
    time_elapsed_sec: 0
  }

  startCounter() {
    let currentDate = new Date();
    this.startDate = currentDate;
  }

  stopCounter() {
    let currentDate = new Date();
    this.endDate = currentDate;
    this.difference = this.endDate - this.startDate;
  }
  constructor(private timestampService: DbConnectService) { }

  ngOnInit() {
    this.timestampService.getTimestamps().subscribe(timestamps => {
        this.timestamps = timestamps;
    });
  }

  submitStopDate(){
    if (this.startDate != undefined) {
        let currentDate = new Date();
        this.endDate = currentDate;
        // console.log('Start date' + this.startDate);
        // console.log('End date' + this.endDate);
        this.timestamp.end_time = this.endDate;
        this.timestamp.start_time = this.startDate;
        this.difference = this.endDate - this.startDate;
        this.timestamp.time_elapsed_sec = this.difference;
        console.log(this.timestamp);
        this.timestampService.addTimestamp(this.timestamp);
        this.startDate = undefined;
        this.endDate = undefined;
    }
  }

}
