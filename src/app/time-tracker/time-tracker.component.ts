import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { Task } from '../core/models/task';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.scss']
})
export class TimeTrackerComponent implements OnInit {
    @Input('task') task:Task;
    startDate;
    endDate;
    time_elapsed_msec = 0;
    minutes;
    ticks = 0;
    minutesDisplay: number = 0;
    hoursDisplay: number = 0;
    secondsDisplay: number = 0;
    sub: Subscription;
    timer;

    constructor( private api: ApiService ) { }



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

  ngOnInit() { }

  startCounter() {
    this.startDate = undefined; // reset startDate
    this.endDate = undefined;   // reset endDate
    let currentDate = new Date();
    this.startDate = currentDate;
    this.startTimer();
  }

  submitStopDate(){
    if (this.startDate != undefined) {
        let currentDate = new Date();
        this.endDate = currentDate;
        this.time_elapsed_msec = this.endDate - this.startDate;
        this.minutes = (this.time_elapsed_msec / 60000).toFixed(4);
        this.stopTimer();
    }
  }

  shouldStartTimer(started:boolean) {
      if (started) { this.startCounter(); }
  }
}
