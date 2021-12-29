import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './items/products/products.component';
import { CartsComponent } from './items/carts/carts.component';
import { DirComponent } from './dir/dir.component';
import { ProductListComponent } from './items/products/product-list/product-list.component';
import { CartsListComponent } from './items/carts/carts-list/carts-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DisplayComponent } from './items/display/display.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { tap } from "rxjs/operators";
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogTestComponent } from './shared/log-test/log-test.component';
import { LogService } from './shared/logging/log.service';
import { LogPublishersService } from './shared/logging/logPublishersService';
import { LogService2 } from './shared/logging-2/log.service-1';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartsComponent,
    DirComponent,
    ProductListComponent,
    CartsListComponent,
    DisplayComponent,
    LoginComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
    ProfileComponent,
    LogTestComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      "domain": "dev-473zftwz.us.auth0.com",
    "clientId": "WKjFSZr05Npt5N0aUnbd5lLO2mmiVBiK"
    }),
    
    


  ],
  providers: [LogService,LogPublishersService,LogService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
