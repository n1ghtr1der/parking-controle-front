import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotSearchComponent } from './parking-spot-search.component';

describe('ParkingSpotSearchComponent', () => {
  let component: ParkingSpotSearchComponent;
  let fixture: ComponentFixture<ParkingSpotSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
