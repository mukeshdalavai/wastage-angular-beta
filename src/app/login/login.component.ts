import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type : string;
  username : string;
  constructor(private router : Router) { }

  ngOnInit() {
    this.type="Resturant";
  }
  setLoginType(LoginType){
   this.type=LoginType;
  }
  IntiateLogin(user : User){
    console.log(user)
    this.username = user.username;
    if(this.type=="Resturant"){
      this.router.navigateByUrl(`/restaurantDashboard/${this.username}`);
    }else if(this.type=="Charity"){
      this.router.navigateByUrl(`/CharityDashBoard/${this.username}`);
    }else if(this.type=="Delivery Boy"){
      this.router.navigateByUrl(`/DeliveryBoyDashBoard/${this.username}`);
    }
  }
}




