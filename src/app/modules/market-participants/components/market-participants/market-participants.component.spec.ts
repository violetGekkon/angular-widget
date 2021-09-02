import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketParticipantsComponent } from './market-participants.component';

describe('MarketParticipantsComponent', () => {
  let component: MarketParticipantsComponent;
  let fixture: ComponentFixture<MarketParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
