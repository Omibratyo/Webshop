import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  chosenImage?: Products;
  loadedImage?: string;
  productObject?: Array<Products>;

  constructor(private router: Router,
    private productsService: ProductsService,
    private SharingService: SharingService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.productsService.loadProducts().subscribe(data =>{
      //this.chosenImage = data;
      this.loadImage(this.chosenImage);
      this.products = data;
    });
    
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    }, error => {
      console.error(error);
    });
  }

  loadImage(imageObject: Products | undefined){
    this.chosenImage = imageObject;
  }

   getProductsId(product: any){
    this.productId = product.id;
    this.SharingService.setData(this.productId);
   console.log(this.productId);

   this.router.navigateByUrl('/products');
  }
}
