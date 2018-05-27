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
    this.timestamps = this.afs.collection('timestamps').valueChanges();
  }

  getTimestamps() {
    return this.timestamps;
  }
}
