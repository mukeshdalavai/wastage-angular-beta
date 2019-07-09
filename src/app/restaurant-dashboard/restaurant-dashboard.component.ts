import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DonationService } from '../donation.service';
import { RestaurantActivity } from '../restaurant-activity';
// import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : DonationService
  ) { }

  restaurant : any;
  username : string;
  restaurantLogs : any;
  foodStatus : any;
  location : any[];
  latitude : string;
  longitude : string;
  foodAvailability : string;
  details = new RestaurantActivity;
  

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.username = params['username']);

    console.log(this.username)
    this.service.fetchRestaurantProfile(this.username).subscribe(data=>{
      console.log(data)
      this.restaurant=data;})

      this.service.fetchRestaurantLogs(this.username).subscribe(data=>{
        console.log(data)
        this.restaurantLogs=data;})
   }

  openDonationModal(){
    document.getElementById('donationModal').style.display="block";
  }

  closeDonationModal(){
    document.getElementById('donationModal').style.display="none";
  }

  updateRestaurantDetails(){
        console.log("global=" + this.foodAvailability);
        this.details.restaurantId = this.username;
        this.details.foodAvailability = this.foodAvailability;
        console.log(this.details);
        this.service.updateRestaurantDetails(this.details).subscribe(data=>{
          console.log(data)})
      }

  fetchStatus(){
    this.service.fetchRestaurantFoodStatus(this.username).subscribe(data=>{
      console.log(data)
      this.foodStatus=data;})
  }
  
}
