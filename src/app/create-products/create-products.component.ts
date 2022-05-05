import { ProductsService } from './../shared/services/products.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {

  createProductsForm = new FormGroup({
    title: new FormControl(''),
    oldPrice: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  createVal: any;

  constructor(
    private router: Router,
    private productsService: ProductsService ) {}

 onSubmit(): void{
  if (this.createProductsForm.valid) {
      this.productsService.create(this.createProductsForm.value).then(_ => {
        this.router.navigateByUrl('');
      }).catch(error => {
        console.error(error);
      });
    }
  }
}
