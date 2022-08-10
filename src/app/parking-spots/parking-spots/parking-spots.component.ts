import { Component, OnInit } from '@angular/core';
import { ParkingSpots } from '../parking-spots';
import { ParkingSpotsService } from '../parking-spots.service';

@Component({
  selector: 'app-parking-spots',
  templateUrl: './parking-spots.component.html',
  styleUrls: ['./parking-spots.component.scss']
})
export class ParkingSpotsComponent implements OnInit {
  parkingSpots: ParkingSpots[] = []; 

  constructor(private parkingSpotService: ParkingSpotsService){}

  public getParkingSpots(): void {
    this.parkingSpotService.getAllParkingSpot().subscribe(parkingSpots => this.parkingSpots = parkingSpots)
    }
  
  ngOnInit() {
    this.getParkingSpots();
  }
}
