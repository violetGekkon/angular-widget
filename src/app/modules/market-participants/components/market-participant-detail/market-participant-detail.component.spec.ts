import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketParticipantDetailComponent } from './market-participant-detail.component';

describe('MarketParticipantDetailComponent', () => {
  let component: MarketParticipantDetailComponent;
  let fixture: ComponentFixture<MarketParticipantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketParticipantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketParticipantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
