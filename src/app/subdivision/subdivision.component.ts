import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Subdivision} from '../../../shared/subdivision.model';

@Component({
  selector: 'app-subdivision',
  templateUrl: './subdivision.component.html',
  styleUrls: ['./subdivision.component.scss']
})
export class SubdivisionComponent implements OnInit {

  @Input() subdivision: Subdivision;

  name = 'Card';
  fsrar: string;
  certificated;
  isActive;

  constructor() {
    this.isActive = false;
  }

  ngOnInit() {
    this.fsrar = '0300001657';
    this.certificated = (this.subdivision.ownerID === this.fsrar) ? true : false;
  }

}






