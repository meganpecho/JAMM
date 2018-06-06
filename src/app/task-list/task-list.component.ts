import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable }        from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../core/api.service';
import { Task, tasks } from '../core/models/task';
import { TimeTrackerComponent } from '../time-tracker/time-tracker.component'
// import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {
    // isStarted:boolean;
    tasks: Task[] = tasks;
    tasksListSub: Subscription;
    error: boolean;
    selectedTaskSub: Subscription;

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

    selectedTask:Task;
    taskInProgress:boolean = false;
    taskTimerStarted:boolean = false;
    taskCompleted:boolean = false;

    constructor( private api: ApiService ) { }

    ngOnInit() {
        this.getTasks();
    }

    ngOnChanges() {
        this.getTasks();
    }

    getTasks() {
        this.tasksListSub = this.api.getTasks()
            .subscribe(
                res => {
                    this.tasks = res;
                    // console.log(this.tasks);
                },
                err => {
                    console.error(err);
                    this.error = true;
            });
    }

    ngOnDestroy() {
        this.tasksListSub.unsubscribe();
    }

    startTask(taskId:string) {
        this.selectedTaskSub = this.api.getTaskById(taskId)
            .subscribe(
                res => {
                    this.selectedTask = res;
                  // console.log(this.tasks);
                },
                err => {
                    console.error(err);
                    this.error = true;
                }
            );

        this.taskInProgress = true;

    }

    startCounter() {
        this.startDate = undefined; // reset startDate
        this.endDate = undefined;   // reset endDate
        let currentDate = new Date();
        this.startDate = currentDate;
        this.taskTimerStarted = true;
        this.startTimer();
    }

    submitStopDate(){
        if (this.startDate != undefined) {
            let currentDate = new Date();
            this.endDate = currentDate;
            this.time_elapsed_msec = this.endDate - this.startDate;
            this.minutes = (this.time_elapsed_msec / 60000).toFixed(4);
            this.taskTimerStarted = false;
            this.taskInProgress = false;
            this.taskCompleted = true;
            this.stopTimer();
        }
    }

    shouldStartTimer(started:boolean) {
        if (started) { this.startCounter(); }
    }

    private startTimer() {
        this.timer = Observable.timer(1, 1000);
        this.sub = this.timer.subscribe(
        t => {
            this.ticks = t;

            this.secondsDisplay = this.getSeconds(this.ticks);
            this.minutesDisplay = this.getMinutes(this.ticks);
            this.hoursDisplay = this.getHours(this.ticks);
        });
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



  // localStorage.clear();
  // this.currentTasks  = localStorage.getItem('currentTasks') ? JSON.parse(localStorage.getItem('currentTasks')) : [];

  //console.log(this.currentTasks[0].value);

  // this.completedTasks = localStorage.getItem('completedTasks') ? JSON.parse(localStorage.getItem('completedTasks')) : [];

  // localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
  // localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));


}
