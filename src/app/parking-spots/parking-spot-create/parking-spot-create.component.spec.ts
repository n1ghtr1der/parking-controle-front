import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSpotCreateComponent } from './parking-spot-create.component';

describe('ParkingSpotCreateComponent', () => {
  let component: ParkingSpotCreateComponent;
  let fixture: ComponentFixture<ParkingSpotCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSpotCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSpotCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
