import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(public afs: AngularFirestore,public db: AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
    console.log("macska");
  }
  
  create(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).valueChanges();
  }

  update(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  delete(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).delete();
  }

}
