import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherTestPageComponent } from './another-test-page.component';

describe('AnotherTestPageComponent', () => {
  let component: AnotherTestPageComponent;
  let fixture: ComponentFixture<AnotherTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
