import { ProductsService } from './../../shared/services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/Products';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  @Input() imageInput?: Products;
  loadedImage?: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }  

  ngOnChanges(): void  {
    if (this.imageInput?.id) {
      this.productsService.loadImage(this.imageInput.image_url).subscribe(data => {
        this.loadedImage = data;
      });
    }
  }
}
