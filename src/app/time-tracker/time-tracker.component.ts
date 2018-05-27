import { Component, OnInit } from '@angular/core';
import { DbConnectService } from '../services/db-connect.service';


@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {

  constructor(private timestampService: DbConnectService) { }

  ngOnInit() {
    this.timestampService.getTimestamps().subscribe(timestamps => {
        console.log(timestamps);
    });
  }

}
