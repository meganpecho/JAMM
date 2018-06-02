import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Task, tasks } from '../daily-to-do/task';

@Injectable()
export class TaskService {

    getTasks(): Observable<Task[]> {
        console.log(tasks);
        return of(tasks);
    }

    // Fake server update; assume nothing can go wrong
    updateTask(task:Task): Observable<Task>  {

        const newTask = Object.assign({}, task);
        tasks.push(newTask);
        return of(newTask);

    }

}
