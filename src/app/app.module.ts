import { CartService } from './shared/services/cart.service';
import { SharingService } from './shared/services/sharing.service';
import { SignupComponent } from './signup/signup.component';
import { UserService } from './shared/services/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire/compat';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatIconModule } from '@angular/material/icon';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewerComponent } from './home/viewer/viewer.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CreateProductsComponent } from './create-products/create-products.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    LoginComponent,
    SignupComponent,
    UpdateProductsComponent,
    ViewerComponent,
    CreateProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'shopping-cart', component: ShoppingCartComponent},
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'update-products', component: UpdateProductsComponent, canActivate: [AuthGuardService]},
      { path: 'create-products', component: CreateProductsComponent, canActivate: [AuthGuardService]}
    ]),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    AngularFireStorageModule,
    Ng2SearchPipeModule
  ],
  providers: [
    AuthService, 
    AuthGuardService,
    UserService,
    SharingService,
    CartService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ ReactiveFormsModule ]
})
export class AppModule { }
