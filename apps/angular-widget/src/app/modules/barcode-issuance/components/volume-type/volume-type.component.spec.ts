import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VolumeTypeComponent } from './volume-type.component';

describe('VolumeTypeComponent', () => {
  let component: VolumeTypeComponent;
  let fixture: ComponentFixture<VolumeTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
