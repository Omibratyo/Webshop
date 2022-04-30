import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../app/shared/services/auth.service';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FakeLoadingService } from '../shared/services/fake-loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(public authService: AuthService, private afAuth: AngularFireAuth,private router: Router, private loadingService: FakeLoadingService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }

  async loginnew() {
    this.loading = true;

      this.authService.loginnew(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/main');
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }


}
