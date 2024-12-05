import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../../../services/signup.service';
import { User } from '../../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  constructor(private signupService:SignupService,private router:Router){}
  registerForm:FormGroup=new FormGroup({
    'name': new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-z]{3,} [A-Za-z]{3,}$') // Regex for firstname lastname format (at least 3 chars each)
    ]),
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
        this.router.navigate(['/userboard'])
      }
    })
  }
}
