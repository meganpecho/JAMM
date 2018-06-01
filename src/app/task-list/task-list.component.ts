import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Task, tasks }        from '../daily-to-do/task';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    tasks: Observable<Task[]>;
    isLoading = false;
    selectedTask: Task;

    constructor(private taskService:TaskService) { }

    ngOnInit() {
        this.getTasks();
    }

    getTasks() {
        this.tasks = this.taskService.getTasks();
    }


}
