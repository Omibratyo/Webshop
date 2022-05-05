import { ProductsService } from './../shared/services/products.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../shared/models/Products';
import { SharingService } from '../shared/services/sharing.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {

  update = new FormGroup({
    title: new FormControl(''),
    oldPrice: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
   
  });

  id: any;
  updateVal: any;
  productsId: any;
  products: Array<Products> = [];
  toUpdate: any;

  constructor(
  private fb: FormBuilder,
  private router: Router,
  private productsService: ProductsService,
  private sharingService: SharingService) {}

 ngOnInit(): void {
  this.productsId = this.sharingService.getData();

  this.productsService.getProductsById(this.productsId).subscribe(data => {
    this.products = data;
    this.toUpdate = this.products[0];
  });
 }

  onSubmit(): void{

  if (this.update.valid) {
    this.productsService.update(this.toUpdate).then(_ => {
      this.router.navigateByUrl('');
    }).catch(error => {
      console.error(error);
    });
  }
 }
}

