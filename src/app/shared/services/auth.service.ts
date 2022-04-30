import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User | null>;
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public route: ActivatedRoute,
    public router: Router,
    public userService: UserService
  ) {
    this.user$ = afAuth.authState;
  }

  
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginnew(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  isUserLoggedIn() {
    return this.afAuth.user;
  }

  logout() {
    return this.afAuth.signOut();
  }
}

