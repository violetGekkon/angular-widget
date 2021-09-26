import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceBooksLayoutComponent } from './reference-books-layout.component';

describe('ReferenceBooksLayoutComponent', () => {
  let component: ReferenceBooksLayoutComponent;
  let fixture: ComponentFixture<ReferenceBooksLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceBooksLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceBooksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
