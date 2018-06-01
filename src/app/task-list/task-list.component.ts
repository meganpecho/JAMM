import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Task, tasks }        from '../task-form/task';
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
        this.isLoading = true;
        this.tasks = this.taskService.getTasks()
            .pipe(finalize(() => this.isLoading = false));
        this.selectedTask = undefined;
    }

    select(task:Task) { this.selectedTask = task; }

}
