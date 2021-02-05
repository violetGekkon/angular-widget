import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardCardSpawnerComponent } from './dashboard-card-spawner.component';

describe('DashboardCardSpawnerComponent', () => {
  let component: DashboardCardSpawnerComponent;
  let fixture: ComponentFixture<DashboardCardSpawnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardSpawnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSpawnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
