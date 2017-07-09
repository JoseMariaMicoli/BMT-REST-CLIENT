import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) {

  }

  public getAllTasks(): Observable<Task[]> {
    return this.http.get(API_URL + 'tasks').map(response => {
      const tasks = response.json();
      return tasks.map((task) => new Task(task));
    }).catch(this.handleError);
  }

  public createTask(task: Task): Observable<Task> {
    return this.http.post(API_URL + 'tasks', task).map(response => {
      return new Task(response.json());
    }).catch(this.handleError);
  }

  public getTaskById(taskId: number): Observable<Task> {
    return this.http.get(API_URL + 'tasks/' + taskId).map(response => {
      return new Task(response.json());
    }).catch(this.handleError);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put(API_URL + 'tasks/' + task.id, task).map(response => {
      return new Task(response.json());
    }).catch(this.handleError);
  }

  public deleteTaskById(taskId: number): Observable<null> {
    return this.http.delete(API_URL + 'tasks/' + taskId).map(response => null).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


}
