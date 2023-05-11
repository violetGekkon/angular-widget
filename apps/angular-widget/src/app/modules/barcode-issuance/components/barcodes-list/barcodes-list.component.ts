import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-barcodes-list',
  templateUrl: './barcodes-list.component.html',
  styleUrls: ['./barcodes-list.component.scss'],
})
export class BarcodesListComponent implements OnInit {
  step = 0;

  @Input() group: UntypedFormGroup;

  @Output() addBarcode = new EventEmitter();
  @Output() deleteBarcode = new EventEmitter();
  @Output() clearBarcode = new EventEmitter();
  @Output() selectedBarcode = new EventEmitter();

  constructor() {}

  // get barcodes(): UntypedFormArray {
  //   return this.group.get('codes') as UntypedFormArray;
  // }

  get barcodes(): UntypedFormGroup[] {
    return (<UntypedFormArray>this.group.get('codes')).controls as UntypedFormGroup[];
  }

  ngOnInit() {}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
