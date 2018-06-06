import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { ApiService } from '../core/api.service';
import { Task, t } from '../core/models/task';

@Injectable()
export class TaskService {

    // getTasks(): Observable<Task[]> {
    //     console.log(t);
    //     return of(t);
    // }
    //
    // // Fake server update; assume nothing can go wrong
    // updateTask(task:Task): Observable<Task>  {
    //
    //     const newTask = Object.assign({}, task);
    //     tasks.push(newTask);
    //     return of(newTask);
    //
    // }



}
