import { Component, Inject, Injectable, OnDestroy, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../items/product.service';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({providedIn: 'root'})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  userEmail:string = null;
  profileJson: string = null;

  constructor(
  @Inject(ProductService) private productService,
  private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (
        this.profileJson = JSON.stringify(profile,null,2)
      ),
    );
    
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }
  onSelect(){

    this.router.navigate(['/display']);
  }

  onLogOut(){
    this.router.navigate(['/auth']);
  }

  onSaveData(){
    this.productService.storeProduct();
  }
}
