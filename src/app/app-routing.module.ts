import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { CartsComponent } from "./items/carts/carts.component";
import { DisplayComponent } from "./items/display/display.component";
import { ProductsComponent } from "./items/products/products.component";
import { LoginComponent } from "./login/login.component";
import { CanActivate } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AuthGuard } from "@auth0/auth0-angular";

const appRoutes:Routes = [
    {path:'',redirectTo:'display',pathMatch:'full'},
    {path:'navbar',component:NavBarComponent},
    // { path: 'header', component:HeaderComponent},
    // { path: 'product', component: ProductsComponent},
    // { path: 'cart', component: CartsComponent},
    // {path:'display', component:DisplayComponent},
    // {path:'login', component:LoginComponent},

    
    
    { path: 'header', component:HeaderComponent,canActivate:[AuthGuard]},
    { path: 'product', component: ProductsComponent,canActivate:[AuthGuard]},
    { path: 'cart', component: CartsComponent,canActivate:[AuthGuard]},
    {path:'display', component:DisplayComponent,canActivate:[AuthGuard]},


]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule{

}