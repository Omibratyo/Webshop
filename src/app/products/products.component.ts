import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../shared/models/Products';
import { AuthService } from '../shared/services/auth.service';
import { SharingService } from '../shared/services/sharing.service';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loggedInUser?: firebase.default.User | null;
  id: any;
  postString: any;
  products: Array<Products> = [];
  product: any;

  productsId: any;

  constructor(  
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private sharingService: SharingService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.productsId = this.sharingService.getData();

    this.productsService.getProductsById(this.productsId).subscribe(data => {
      this.products = data;
    });

    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.authService.isUserLoggedIn().subscribe(user => {
      //console.log(user);
      this.loggedInUser = user;
    }, error => {
      console.error(error);
    });
  }

  changeComponent(){
    this.sharingService.setData(this.productsId);
  }


 async delete(id: string){
    this.productsService.delete(id);
      console.log(this.productsId + " has been deleted");
      
  }

}
