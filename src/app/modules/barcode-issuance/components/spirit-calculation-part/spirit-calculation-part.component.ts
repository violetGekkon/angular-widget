import {Component, Input, OnInit} from '@angular/core';
import {UntypedFormGroup} from '@angular/forms';

@Component({
  selector: 'app-spirit-calculation-part',
  templateUrl: './spirit-calculation-part.component.html',
  styleUrls: ['../../barcode-issuance.scss', './spirit-calculation-part.component.scss']
})
export class SpiritCalculationPartComponent implements OnInit {

  @Input() group: UntypedFormGroup;

  volumeReceivedRaw: UntypedFormGroup;
  volumeUsedRaw: UntypedFormGroup;
  constructor() { }

  ngOnInit() {
    this.volumeReceivedRaw = this.group.get('volumeReceivedRaw') as UntypedFormGroup;
    this.volumeUsedRaw = this.group.get('volumeUsedRaw') as UntypedFormGroup;

  }

}
