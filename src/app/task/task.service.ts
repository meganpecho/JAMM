import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

import { Task, tasks } from '../task-form/task';

@Injectable()
export class TaskService {

    delayMS = 500;

    getTasks(): Observable<Task[]> {
        return of(tasks).pipe(delay(this.delayMS)); // simulate latency with delay
    }

    // Fake server update; assume nothing can go wrong
    updateTask(task:Task): Observable<Task>  {
        const oldTask = tasks.find(t => t.id === task.id);
        const newTask = Object.assign(oldTask, task); // Demo: mutate cached hero
        return of(newTask).pipe(delay(this.delayMS)); // simulate latency with delay
    }

}
