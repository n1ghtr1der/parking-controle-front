import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ParkingSpots } from './../parking-spots';
import { Component, OnInit } from '@angular/core';
import { ParkingSpotsService } from '../parking-spots.service';

@Component({
  selector: 'app-parking-spot-delete',
  templateUrl: './parking-spot-delete.component.html',
  styleUrls: ['./parking-spot-delete.component.scss']
})
export class ParkingSpotDeleteComponent implements OnInit {
  parkingSpots!: ParkingSpots;

  constructor(private parkingSpotsService: ParkingSpotsService, private router: Router) { }

  public deleteParkingSpot(parkingSpotId: string): void {
    this.parkingSpotsService.deleteParkingSpot(parkingSpotId).subscribe({
      next: (Response: ParkingSpots) => {
        alert("Parking spot deleted!");
        this.router.navigateByUrl('/showAll');
      },
      error: (Error: HttpErrorResponse) => {
        alert(Error.message);
      }
    })
  }

  ngOnInit(): void {
  }

}
