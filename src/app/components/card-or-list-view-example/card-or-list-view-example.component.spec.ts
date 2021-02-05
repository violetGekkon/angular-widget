import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardOrListViewExampleComponent } from './card-or-list-view-example.component';

describe('CardOrListViewExampleComponent', () => {
  let component: CardOrListViewExampleComponent;
  let fixture: ComponentFixture<CardOrListViewExampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOrListViewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOrListViewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
