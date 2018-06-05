import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
export class TaskListComponent implements OnInit {
    @Output() isStarted = new EventEmitter<boolean>();
    tasks: Observable<Task[]>;
    tasksListSub: Subscription;
    error: boolean;
    taskInProgress:Task;
    selectedTaskSub: Subscription;
    // isLoading = false;
    // selectedTask: Task;

    // constructor(private taskService:TaskService) { }

    // ngOnInit() {
    //     this.getTasks();
    // }
    //
    // getTasks() {
    //     this.tasks = this.taskService.getTasks();
    // }



    constructor( private api: ApiService ) { }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.tasksListSub = this.api.getTasks()
            .subscribe(
                res => {
                    this.tasks = res;
                    console.log(this.tasks);
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
                  this.taskInProgress = res;
                  console.log(this.tasks);
              },
              err => {
                  console.error(err);
                  this.error = true;
          });
          this.isStarted.emit(true);
  }

  // localStorage.clear();
  // this.currentTasks  = localStorage.getItem('currentTasks') ? JSON.parse(localStorage.getItem('currentTasks')) : [];

  //console.log(this.currentTasks[0].value);

  // this.completedTasks = localStorage.getItem('completedTasks') ? JSON.parse(localStorage.getItem('completedTasks')) : [];

  // localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
  // localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));


}
