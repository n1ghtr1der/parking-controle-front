import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ParkingSpotsService } from '../parking-spots.service';
import { ParkingSpots } from './../parking-spots';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-parking-spot-create',
  templateUrl: './parking-spot-create.component.html',
  styleUrls: ['./parking-spot-create.component.scss']
})
export class ParkingSpotCreateComponent implements OnInit {
  parkingSpots: ParkingSpots[] = [];

  constructor(private parkingSpotsService: ParkingSpotsService, private router: Router) {}

  public newParkingSpot(createForm: NgForm): void {
    this.parkingSpotsService.newParkingSpot(createForm.value).subscribe({
      next: () => {
        alert('Parking spot created!');
        this.router.navigateByUrl('showAll');
      },
      error: (Error: HttpErrorResponse) => {
        alert(Error.message);
      }
    }
    );
  }

  ngOnInit(): void {
  }

}
