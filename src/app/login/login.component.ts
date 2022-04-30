import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/shared/services/auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }


}
