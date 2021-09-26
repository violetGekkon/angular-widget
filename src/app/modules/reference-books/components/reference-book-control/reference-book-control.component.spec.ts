import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceBookControlComponent } from './reference-book-control.component';

describe('ReferenceBookControlComponent', () => {
  let component: ReferenceBookControlComponent;
  let fixture: ComponentFixture<ReferenceBookControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceBookControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceBookControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
