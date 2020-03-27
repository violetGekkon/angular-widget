import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsaPageComponent } from './rsa-page.component';

describe('TestPageComponent', () => {
  let component: RsaPageComponent;
  let fixture: ComponentFixture<RsaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
