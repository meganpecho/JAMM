import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Timestamp } from '../models/timestamp';
import { Task } from '../models/task';

@Injectable()
export class DbConnectService {
  timestampCollection: AngularFirestoreCollection<Timestamp>;
  taskCollection: AngularFirestoreCollection<Task>;
  timestamps: Observable<Timestamp[]>;
  tasks: Observable<Task[]>;

  constructor(public afs: AngularFirestore) {
    this.timestampCollection = this.afs.collection('timestamps');
    this.timestamps = this.timestampCollection.valueChanges();

    this.taskCollection = this.afs.collection('tasks');
    this.tasks = this.timestampCollection.valueChanges();
  }

  // retrieve timestamps from db
  getTimestamps() {
    return this.timestamps;
  }

  // add timestamp to db
  addTimestamp(timestamp: Timestamp) {
    this.timestampCollection.add(timestamp);
  }

  // add task to db
  addTask(task: Task) {
    this.taskCollection.add(task);
  }
}
