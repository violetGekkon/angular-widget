import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlidePanelComponent } from './slide-panel.component';

describe('SlidePanelComponent', () => {
  let component: SlidePanelComponent;
  let fixture: ComponentFixture<SlidePanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
