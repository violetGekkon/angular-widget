import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapExampleComponent } from './map-example.component';

describe('AnotherTestPageComponent', () => {
  let component: MapExampleComponent;
  let fixture: ComponentFixture<MapExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
