import { SignupService } from './../../services/signup.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { User } from '../../model/user';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../partials/footer/footer.component";
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private signupService:SignupService){}
  registerForm:FormGroup=new FormGroup({
    'firstName':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]),
    'lastName':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{2,}')]),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'username':new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{2,}[0-9]{1,}$')]),
    'phone':new FormControl('',[Validators.required,Validators.pattern('^(010|011|012|015){1}[0-9]{8}$')]),
    'password':new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^[A-Za-z]{3,}[0-9]{3,}$')]),
    'img':new FormControl('',[Validators.required]),
  })
  addUser(form:User)
  {
    this.signupService.addUser(form).subscribe({
      next:(data:any)=>{
        console.log('user added successfully');
      },
      error:(err:any)=>
      {
        console.log('error');
      }
    })
  }
}
