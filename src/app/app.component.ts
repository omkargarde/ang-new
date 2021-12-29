import { Component } from '@angular/core';
import { Product } from './items/product.model';
import { ProductService } from './items/product.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title = 'ang-new';

  selectedProduct:Product;

  constructor(private productService: ProductService,public auth:AuthService){

  }

  
}
// 