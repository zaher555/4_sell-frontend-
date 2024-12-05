import { SignupService } from './../../../services/signup.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userId:number=0
  user!:User
  constructor(private activatedRoute:ActivatedRoute,private signupService:SignupService){}
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
      }),
      error:((err)=>{
        console.log('error');
      })
    })
  }
}
