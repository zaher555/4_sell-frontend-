import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { authService } from '../../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService:authService,private router:Router){}
  bar:boolean=false
  private checkUser:boolean=false
  private _snackBar = inject(MatSnackBar);
  _snackBarRef = inject(MatSnackBar);
  durationInSeconds = 2;

  logout()
  {
    this.authService.logout().subscribe({
      next:(data:any)=>{
        localStorage.removeItem('token');
        console.log('logged out successfully');
        this.bar!=this.bar
        this._snackBar.open('Logout Successful!', 'Close', {
          duration: this.durationInSeconds * 1000,
        });
        this.router.navigate(['cart']);
      },
      error:(err:any)=>
      {
        this._snackBar.open('Logout Failed. Please try again.', 'Close', {
          duration: this.durationInSeconds * 1000,
        });      
      }
    })
  }
}
