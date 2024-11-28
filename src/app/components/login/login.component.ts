import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../model/login';
import { NavbarComponent } from "../partials/navbar/navbar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:authService,private router:Router){}
  bar:boolean=false
  private _snackBar = inject(MatSnackBar);
  _snackBarRef = inject(MatSnackBar);
  durationInSeconds = 2;
  loginForm:FormGroup=new FormGroup({
    'email':new FormControl('',[Validators.required,Validators.email]),
    // 'username':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{2,}[0-9]{1,}$')]),
    'password':new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^[A-Za-z]{3,}[0-9]{3,}$')]),
  })
  login(form:Login)
  {
    this.authService.login(form).subscribe({
      next:(data:any)=>{
        localStorage.setItem('token',data.token);
        localStorage.setItem('user',JSON.stringify(data.user));
        this.bar!=this.bar
        this._snackBar.open('Login Successful!', 'Close', {
          duration: this.durationInSeconds * 1000,
        });
        this.router.navigate(['cart']);
      },
      error:(err:any)=>
      {
        this._snackBar.open('Login Failed. Please try again.', 'Close', {
          duration: this.durationInSeconds * 1000,
        });
      }
    })
  }
}
