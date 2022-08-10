import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingSpotsComponent } from './parking-spots/parking-spots.component';
import { FormsModule } from '@angular/forms';

import { ParkingSpotSearchComponent } from './parking-spot-search/parking-spot-search.component';
import { ParkingSpotEditComponent } from './parking-spot-edit/parking-spot-edit.component';
import { ParkingSpotDeleteComponent } from './parking-spot-delete/parking-spot-delete.component';
import { ParkingSpotCreateComponent } from './parking-spot-create/parking-spot-create.component';
import { ParkingSpotsRoutingModule } from './parking-spots-routing.module';




@NgModule({
  declarations: [
    ParkingSpotsComponent,
    ParkingSpotSearchComponent,
    ParkingSpotEditComponent,
    ParkingSpotDeleteComponent,
    ParkingSpotCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ParkingSpotsRoutingModule,
  ],
  exports: [
    ParkingSpotsComponent,
    ParkingSpotSearchComponent,
    ParkingSpotCreateComponent,
    ParkingSpotDeleteComponent,
    ParkingSpotEditComponent,
  ]
})
export class ParkingSpotsModule { }
