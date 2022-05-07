import { Products } from 'src/app/shared/models/Products';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[];
  collectionName = 'Products';
  public products: Array<Products> = [];
  public productList = new BehaviorSubject<any>([]);

  constructor(  
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.products.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.products.push(product);
    this.productList.next(this.products);
    this.getTotalPrice();
    console.log(this.products)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.products.map((a:any)=>{
      grandTotal += parseInt(a.price);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.products.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.products.splice(index,1);
      }
    })
    this.productList.next(this.products);
  }
  removeAllCart(){
    this.products = []
    this.productList.next(this.products);
  }
}