import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-spirit-calculation-part',
  templateUrl: './spirit-calculation-part.component.html',
  styleUrls: ['../../barcode-issuance.scss', './spirit-calculation-part.component.scss']
})
export class SpiritCalculationPartComponent implements OnInit {

  @Input() group: FormGroup;

  volumeReceivedRaw: FormGroup;
  volumeUsedRaw: FormGroup;
  constructor() { }

  ngOnInit() {
    this.volumeReceivedRaw = this.group.get('volumeReceivedRaw') as FormGroup;
    this.volumeUsedRaw = this.group.get('volumeUsedRaw') as FormGroup;

  }

}
