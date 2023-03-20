import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersListComponent } from './flowers-list.component';

describe('MarketParticipantsComponent', () => {
  let component: FlowersListComponent;
  let fixture: ComponentFixture<FlowersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
