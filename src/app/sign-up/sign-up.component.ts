import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { Restaurant } from '../restaurant';
import { Charity } from '../charity';
import { DeliveryBoy } from '../delivery-boy';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service : DonationService) { }

  ngOnInit() {
  }

  public saveRestaurant(restaurant : Restaurant){
    alert("Successfully Signed Up");
    console.log(restaurant)
    this.service.saveRestaurant(restaurant).subscribe((data)=>{
      console.log(data);
    })
  }

  public saveCharity(charity : Charity){
    alert("Successfully Signed Up");
    console.log(charity)
    this.service.saveCharity(charity).subscribe((data)=>{
      console.log(data);
    })
  }

  public saveDeliveryBoy(deliveryBoy : DeliveryBoy){
    console.log(deliveryBoy)
    this.service.saveDeliveryBoy(deliveryBoy).subscribe((data)=>{
      console.log(data);
    })
  }
}
