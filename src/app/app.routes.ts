import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from './guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { AdminBoardComponent } from './components/admin/admin-board/admin-board.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'/homePage',pathMatch:'full'},
        {path:'homePage',component:HomePageComponent},
        {path:'products',component:CategoryProductComponent},
        {path:'cart',canActivate:[authGuard],component:CartComponent},
    ]},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdminBoardComponent},
];