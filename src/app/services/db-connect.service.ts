import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument }
from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Timestamp } from '../models/timestamp';

@Injectable()
export class DbConnectService {
  timestampCollection: AngularFirestoreCollection<Timestamp>;
  timestamps: Observable<Timestamp[]>;

  constructor(public afs: AngularFirestore) {
    this.timestampCollection = this.afs.collection('timestamps');
    this.timestamps = this.timestampCollection.valueChanges();
  }

  // retrieve timestamps from db
  getTimestamps() {
    return this.timestamps;
  }

  // add timestamp to db
  addTimestamp(timestamp: Timestamp) {
    this.timestampCollection.add(timestamp);
  }
}
