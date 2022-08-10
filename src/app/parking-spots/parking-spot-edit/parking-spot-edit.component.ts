import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ParkingSpots } from './../parking-spots';
import { Component, OnInit } from '@angular/core';
import { ParkingSpotsService } from '../parking-spots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-spot-edit',
  templateUrl: './parking-spot-edit.component.html',
  styleUrls: ['./parking-spot-edit.component.scss']
})
export class ParkingSpotEditComponent implements OnInit {
  parkingSpots!: ParkingSpots;

  constructor(private parkingSpotsService: ParkingSpotsService, private router: Router) {}
  
  public editParkingSpot(parkingSpotId: string, editForm: NgForm): void {
    this.parkingSpotsService.editParkingSpot(parkingSpotId, editForm.value).subscribe({
      next: (Response: ParkingSpots) => {
        alert(`Parking Spot ${Response.id} updated!`);
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
