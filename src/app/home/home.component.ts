/**import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ProductsService } from '../shared/services/products.service';
import { Products } from '../shared/models/Products';
import { SharingService } from '../shared/services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productId: any; 
  products: Array<Products> = [];

  constructor(  
    private router: Router,
    private productsService: ProductsService,
    private SharingService: SharingService) { }

  ngOnInit(): void {
    this.productsService.loadProducts().subscribe(data =>{
      this.products = data;
    });
    
  }

  getProductId(product: any){
    this.productId = product.id;
    this.SharingService.setData(this.productId);

   this.router.navigateByUrl('/products');
  }

}*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { ProductsService } from '../../app/shared/services/products.service';
import { Products } from '../shared/models/Products';
import { SharingService } from '../../app/shared/services/sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productId: any; 
  products: Array<Products> = [];
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router,
    private productsService: ProductsService,
    private SharingService: SharingService,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.productsService.loadProducts().subscribe(data =>{
      this.products = data;
    });

    
    
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.error(error);
    });
  }

   getProductsId(product: any){
    this.productId = product.id;
    this.SharingService.setData(this.productId);
   console.log(this.productId);

   this.router.navigateByUrl('/products');
  }

}
