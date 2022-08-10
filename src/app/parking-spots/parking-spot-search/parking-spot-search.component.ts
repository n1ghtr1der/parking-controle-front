import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParkingSpotsService } from './../parking-spots.service';
import { ParkingSpots } from './../parking-spots';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking-spot-search',
  templateUrl: './parking-spot-search.component.html',
  styleUrls: ['./parking-spot-search.component.scss']
})
export class ParkingSpotSearchComponent implements OnInit {
  parkingSpots!: ParkingSpots;

  constructor(private ParkingSpotsService: ParkingSpotsService, private router: Router) {}

  public getOneParkingSpot(parkingSpotId: string): void {
    this.ParkingSpotsService.getParkingSpot(parkingSpotId).subscribe({
      next: (parkingSpots) => {
        this.parkingSpots = parkingSpots;
      },
      error: (Error: HttpErrorResponse) => {
        alert(Error.message);
      }
    });
  }

  ngOnInit(): void {
  }

}
