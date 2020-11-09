import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsWithKeyframesComponent } from './animations-with-keyframes.component';

describe('AnimationsWithKeyframesComponent', () => {
  let component: AnimationsWithKeyframesComponent;
  let fixture: ComponentFixture<AnimationsWithKeyframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationsWithKeyframesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsWithKeyframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
