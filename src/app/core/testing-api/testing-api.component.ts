import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/Subscription';
import { Task } from '../models/task';

@Component({
  selector: 'app-testing-api',
  templateUrl: './testing-api.component.html',
  styleUrls: ['./testing-api.component.scss']
})
export class TestingApiComponent implements OnInit, OnDestroy {

  tasksListSub: Subscription;
  tasks: Task[];
  error: boolean;

  constructor( public api: ApiService ) { }

  ngOnInit() {
    console.log("Hello from testing");
    this.getTasks();
  }

  getTasks() {
    this.tasksListSub = this.api
      .getTasks()
      .subscribe(
        res => {
          this.tasks = res;
          console.log(this.tasks);
        },
        err => {
          console.error(err);
          this.error = true;
        }
      );
  }

  ngOnDestroy() {
    this.tasksListSub.unsubscribe();
  }


}
