import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceBooksListComponent } from './reference-books-list.component';

describe('ReferenceBooksListComponent', () => {
  let component: ReferenceBooksListComponent;
  let fixture: ComponentFixture<ReferenceBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceBooksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
