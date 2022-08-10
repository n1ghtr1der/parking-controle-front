import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotEditComponent } from './parking-spot-edit.component';

describe('ParkingSpotEditComponent', () => {
  let component: ParkingSpotEditComponent;
  let fixture: ComponentFixture<ParkingSpotEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
