import { Component, OnInit } from '@angular/core';
import { Product } from './items/product.model';
import { ProductService } from './items/product.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})



export class AppComponent implements OnInit {
  title = 'ang-new';

  selectedProduct:Product;

  constructor(private productService: ProductService,private authService:AuthService,public router:Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'xx-xxxxx-xx', 
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }
    }
 )

  }
  

  ngOnInit(): void {
      this.authService.autoLogin();
  }

  
}
// 