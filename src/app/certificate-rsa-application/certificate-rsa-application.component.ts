import {Component, Input, OnInit} from '@angular/core';
import {Subdivision} from '../interfaces/subdivision.model';

@Component({
  selector: 'app-certificate-rsa-application',
  templateUrl: './certificate-rsa-application.component.html',
  styleUrls: ['./certificate-rsa-application.component.scss']
})
export class CertificateRsaApplicationComponent implements OnInit {

  @Input() selectedSub: Subdivision;

  name = 'Лицо такое-то'

  constructor() {
  }

  ngOnInit() {

  }

}
