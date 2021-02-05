import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleAnimationsComponent } from './simple-animations.component';

describe('SimpleAnimationsComponent', () => {
  let component: SimpleAnimationsComponent;
  let fixture: ComponentFixture<SimpleAnimationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
