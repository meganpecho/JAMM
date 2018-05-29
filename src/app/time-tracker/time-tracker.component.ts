import { Component, OnInit } from '@angular/core';
import { DbConnectService } from '../services/db-connect.service';
import { Timestamp } from '../models/timestamp';
import { Task } from '../models/task';
import { Observable, Subscription } from 'rxjs/Rx';

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
  ticks = 0;

  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;
  sub: Subscription;
  timer;


  private startTimer() {
        this.timer = Observable.timer(1, 1000);
        this.sub = this.timer.subscribe(
            t => {
                this.ticks = t;

                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) {
        return digit <= 9 ? '0' + digit : digit;
    }

    private stopTimer() {
      this.timer = undefined;
      this.sub.unsubscribe();
      this.minutesDisplay = 0;
      this.hoursDisplay = 0;
      this.secondsDisplay = 0;
    }

  timestamp: Timestamp = {
    end_time: '',
    start_time: '',
    time_elapsed_sec: 0
  }

  task: Task = {
    task_name: '',
    task_description: '',
    estimated_time_mins: 0
  }

  startCounter() {
    let currentDate = new Date();
    this.startDate = currentDate;
    this.startTimer();
  }

  // stopCounter() {
  //   let currentDate = new Date();
  //   this.endDate = currentDate;
  //   this.difference = this.endDate - this.startDate;
  // }
  constructor(private dbService: DbConnectService) { }

  ngOnInit() {
    this.dbService.getTimestamps().subscribe(timestamps => {
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
        this.dbService.addTimestamp(this.timestamp);
        this.startDate = undefined;
        this.endDate = undefined;
        this.stopTimer();
    }
  }

  addNewTask(){
      if (this.task.task_name != '') {
        console.log(this.task);
        this.dbService.addTask(this.task);
      }

  }

}
