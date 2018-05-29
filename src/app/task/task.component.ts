import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    name:string;
    description:string;
    estimatedTime:string;
    actualTIme:string;

    inProgress:boolean = false;
    completed:boolean = false;

    constructor() { }

    ngOnInit() {
    }

    startTask():void {
        this.inProgress = true;
    }

    completeTask():void {
        this.inProgress = false;
        this.completed = true;
    }

}
