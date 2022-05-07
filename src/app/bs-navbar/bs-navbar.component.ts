import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/User';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  public totalItem : number = 0; 

  constructor(private afAuth: AngularFireAuth, public authService: AuthService,private cartService : CartService) {
   }

  ngOnInit(): void{
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  logout(){
    this.authService.logout();
  }
}
