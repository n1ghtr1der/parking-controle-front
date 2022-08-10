import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotDeleteComponent } from './parking-spot-delete.component';

describe('ParkingSpotDeleteComponent', () => {
  let component: ParkingSpotDeleteComponent;
  let fixture: ComponentFixture<ParkingSpotDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpotDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
