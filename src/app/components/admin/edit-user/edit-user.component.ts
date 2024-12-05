import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../../../services/signup.service';
import { User } from '../../../model/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  private userId:number=0
  user!:User
  registerForm!:FormGroup
  constructor(private signupService:SignupService,private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.getUserById();
  }
  getUserById()
  {
    this.userId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.signupService.getUser(this.userId).subscribe({
      next:((response:any)=>{
        this.user=response.data
        console.log(this.user)
        this.registerForm=new FormGroup({
          'name':new FormControl(this.user.name,[Validators.required,  Validators.pattern('^[A-Za-z]{3,} [A-Za-z]{3,}$')]),
          'email':new FormControl(this.user.email,[Validators.required,Validators.email]),
          'username':new FormControl(this.user.username,[Validators.required,Validators.pattern('[A-Za-z]{2,}[0-9]{1,}$')]),
          'phone':new FormControl(this.user.phone,[Validators.required,Validators.pattern('^(010|011|012|015){1}[0-9]{8}$')]),
          'password':new FormControl(this.user.password,[Validators.required,Validators.minLength(8),Validators.pattern('^[A-Za-z]{3,}[0-9]{3,}$')]),
          'img':new FormControl(this.user.img,[Validators.required]),
        })
      }),
      error:((err)=>{
        console.log('error');
      })
    })
  }
  updateUser(form:User)
  {
    this.userId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.signupService.updateUser(this.userId,form).subscribe({
      next:(data:any)=>{
        console.log('user updated successfully');
        this.router.navigate(['/userboard'])
      },
      error:(err:any)=>
      {
        console.log('error');
      }
    })
  }
}
