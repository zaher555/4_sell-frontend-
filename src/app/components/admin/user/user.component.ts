import { SignupService } from './../../../services/signup.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { User } from '../../../model/user';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SidebarComponent,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users:User[]=[]
  cancelSubscription!:Subscription
  constructor(private signupService:SignupService){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers()
  {
    this.signupService.getAllUsers().subscribe({
      next:((response:any)=>{
        this.users=response.data;
        console.log(this.users);
      }),
      error:((err)=>{
        console.log('error')
      })
    })
  }

}
