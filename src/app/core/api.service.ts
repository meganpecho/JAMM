// src/app/core/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ENV } from './env.config';
import { Task } from './models/task';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  // GET list of all tasks in the DB (Auth required)
  getTasks(): Observable<Task[]> {
    let tasks = this.http
      .get<Task[]>(`${ENV.BASE_API}tasks`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
      return tasks;
  }

  // GET single task by task ID (Auth required)
  getTaskById(id: string): Observable<Task> {
    let taskWithId = this.http
      .get(`${ENV.BASE_API}task/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
      return taskWithId;
  }

  // GET all tasks of an individual user given their userId (Auth required)
  getTasksByUserId(userId: string): Observable<Task[]> {
    let userTasks:Observable<Task[]> = this.http
      .get<Task[]>(`${ENV.BASE_API}tasks/${userId}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
      return userTasks;
  }

  // POST new event (Auth Required)
  createNewTask(task: Task): Observable<Task> {
    let newTask = this.http
      .post<Task>(`${ENV.BASE_API}task/new`, task, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
      return newTask;
  }

  // Error handling
  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  }

}
