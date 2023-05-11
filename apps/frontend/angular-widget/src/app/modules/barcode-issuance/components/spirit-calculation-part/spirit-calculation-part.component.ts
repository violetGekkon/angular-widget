import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-spirit-calculation-part',
  templateUrl: './spirit-calculation-part.component.html',
  styleUrls: [
    '../../barcode-issuance.scss',
    './spirit-calculation-part.component.scss',
  ],
})
export class SpiritCalculationPartComponent implements OnInit {
  @Input() group: UntypedFormGroup;

  volumeReceivedRaw: UntypedFormGroup;
  volumeUsedRaw: UntypedFormGroup;
  constructor() {}

  ngOnInit() {
    this.volumeReceivedRaw = this.group.get(
      'volumeReceivedRaw'
    ) as UntypedFormGroup;
    this.volumeUsedRaw = this.group.get('volumeUsedRaw') as UntypedFormGroup;
  }

  get volumeProducedRaw(): UntypedFormGroup {
    return this.group.get('volumeProducedRaw') as UntypedFormGroup;
  }

  get volumeOutRaw(): UntypedFormGroup {
    return this.group.get('volumeOutRaw') as UntypedFormGroup;
  }

  get volumeFromAgingRaw(): UntypedFormGroup {
    return this.volumeReceivedRaw.get('volumeFromAgingRaw') as UntypedFormGroup;
  }

  get volumeBuyRaw(): UntypedFormGroup {
    return this.volumeReceivedRaw.get('volumeBuyRaw') as UntypedFormGroup;
  }

  get volumeConversionRaw(): UntypedFormGroup {
    return this.volumeReceivedRaw.get(
      'volumeConversionRaw'
    ) as UntypedFormGroup;
  }

  get volumeToAgingRaw(): UntypedFormGroup {
    return this.volumeUsedRaw.get('volumeToAgingRaw') as UntypedFormGroup;
  }

  get volumeToProducedRaw(): UntypedFormGroup {
    return this.volumeUsedRaw.get('volumeToProducedRaw') as UntypedFormGroup;
  }
}
