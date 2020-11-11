import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAnimationsComponent } from './simple-animations.component';

describe('SimpleAnimationsComponent', () => {
  let component: SimpleAnimationsComponent;
  let fixture: ComponentFixture<SimpleAnimationsComponent>;

  beforeEach(async(() => {
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
