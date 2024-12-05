import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { authGuard } from './guards/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { UserComponent } from './components/admin/user/user.component';
import { HomeComponent } from './components/admin/home/home.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
export const routes: Routes = [
    {path:'',component:MainLayoutComponent,children:[
        {path:'',redirectTo:'/homePage',pathMatch:'full'},
        {path:'homePage',component:HomePageComponent},
        {path:'products',component:CategoryProductComponent},
        {path:'cart',canActivate:[authGuard],component:CartComponent},
    ]},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'homeboard',component:HomeComponent,pathMatch:'full'},
    {path:'userboard',component:UserComponent,pathMatch:'full'},
    {path:'useradd',component:AddUserComponent,pathMatch:'full'},
    {path:'userboard/:id',component:UserDetailsComponent,pathMatch:'full'},
    {path:'userupdate/:id',component:EditUserComponent,pathMatch:'full'},
];