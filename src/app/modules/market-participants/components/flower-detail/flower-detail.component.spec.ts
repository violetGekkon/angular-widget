import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDetailComponent } from './flower-detail.component';

describe('MarketParticipantDetailComponent', () => {
  let component: FlowerDetailComponent;
  let fixture: ComponentFixture<FlowerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
