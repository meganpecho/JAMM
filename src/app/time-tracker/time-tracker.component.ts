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

  constructor(private timestampService: DbConnectService) { }

  ngOnInit() {
    this.timestampService.getTimestamps().subscribe(timestamps => {
        // console.log(timestamps);
        this.timestamps = timestamps;
    });
  }

}