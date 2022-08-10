import { ParkingSpotSearchComponent } from './parking-spot-search/parking-spot-search.component';
import { ParkingSpotEditComponent } from './parking-spot-edit/parking-spot-edit.component';
import { ParkingSpotDeleteComponent } from './parking-spot-delete/parking-spot-delete.component';
import { ParkingSpotCreateComponent } from './parking-spot-create/parking-spot-create.component';
import { ParkingSpotsComponent } from './parking-spots/parking-spots.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo:'showAll', pathMatch:'full'},
    {path: 'showAll', component: ParkingSpotsComponent},
    {path: 'search', component: ParkingSpotSearchComponent},
    {path: 'create', component: ParkingSpotCreateComponent},
    {path: 'delete', component: ParkingSpotDeleteComponent},
    {path: 'update', component: ParkingSpotEditComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ParkingSpotsRoutingModule { }
