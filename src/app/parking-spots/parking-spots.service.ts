import { ParkingSpots } from './parking-spots';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllParkingSpot(): Observable<ParkingSpots[]> {
    return this.http.get<ParkingSpots[]>(`${this.apiServerUrl}/parking-spot/getAll`);
  }

  public getParkingSpot(parkingSpotId: string): Observable<ParkingSpots> {
    return this.http.get<ParkingSpots>(`${this.apiServerUrl}/parking-spot/${parkingSpotId}`);
  }

  public newParkingSpot(parkingSpots: ParkingSpots): Observable<ParkingSpots> {
    return this.http.post<ParkingSpots>(`${this.apiServerUrl}/parking-spot/create`, parkingSpots);
  }

  public deleteParkingSpot(parkingSpotId: string): any {
    return this.http.delete(`${this.apiServerUrl}/parking-spot/delete/${parkingSpotId}`, {responseType: 'text'});
  }

  public editParkingSpot(parkingSpotId: string, parkingSpots: ParkingSpots): Observable<ParkingSpots> {
    return this.http.put<ParkingSpots>(`${this.apiServerUrl}/parking-spot/update/${parkingSpotId}`, parkingSpots);
  }
}
