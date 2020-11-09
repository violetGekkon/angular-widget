import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateRsaApplicationComponent } from './certificate-rsa-application.component';

describe('CertificateRsaApplicationComponent', () => {
  let component: CertificateRsaApplicationComponent;
  let fixture: ComponentFixture<CertificateRsaApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateRsaApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateRsaApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
