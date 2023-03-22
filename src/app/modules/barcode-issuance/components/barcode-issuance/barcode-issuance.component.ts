import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {UntypedFormGroup} from '@angular/forms';
import {MatStepper} from '@angular/material/stepper';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {BarcodeIssuanceService} from '../../services/barcode-issuance.service';


@Component({
  selector: 'app-settings-page',
  templateUrl: './barcode-issuance.component.html',
  styleUrls: ['./barcode-issuance.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true}
    }
  ]
})
export class BarcodeIssuanceComponent implements OnInit, AfterViewInit {

  steps = [];
  number;
  totalStepsCount;

  @ViewChild('stepper')
  private matStepper: MatStepper;

  // calcList = new Map(
  //   [
  //     ['01', {label: 'АП из спирта', checked: false}],
  //     ['02', {label: 'АП из виноматериала', checked: false}],
  //     ['03', {label: 'Сырьё на выдержке', checked: false}],
  //     ['04', {label: 'Маркируемая АП', checked: false}],
  //     ['05', {label: 'Производственные мощности', checked: false}],
  //     ['06', {label: 'Винодельческая АП', checked: false}]
  //   ]
  // );
// {
//   label: string,
//   checked: boolean,
//   id: TemplateRef<any>
// }[]


  calcList =
    [
      {label: 'АП из спирта', checked: false, id: 'spirit'},
      {label: 'АП из виноматериала', checked: false, id: 'wineMaterial'},
      {label: 'Сырьё на выдержке', checked: false, id: 'rawAged'},
      {label: 'Маркируемая АП', checked: false, id: 'markedAP'},
      {label: 'Производственные мощности', checked: false, id: 'productiveCapacity'},
      {label: 'Винодельческая АП', checked: false, id: 'wineMakingAP'}
    ];


  get codeIssuanceForm(): UntypedFormGroup {
    return this.codeIssuanceService.form;
  }

  get calculationDemand(): UntypedFormGroup {
    return this.codeIssuanceForm.get('calculationDemand') as UntypedFormGroup;
  }

  constructor(private readonly  codeIssuanceService: BarcodeIssuanceService) {
  }

  ngOnInit() {
    console.log('BarcodeIssuanceComponent ngOnInit');
    console.log('claimDate');
    console.log(this.codeIssuanceForm.get('claimDate'));
    // console.log(this.codeIssuanceForm.controls['claimDate'].value);
    this.onBarcodeAdd();
  }

  ngAfterViewInit() {
    this.totalStepsCount = this.matStepper._steps.length;
  }

  stepChanged(stepper: MatStepper) {
    // console.log('matStepper ' + matStepper);
    // console.log('matStepper.selectedIndex ' + matStepper.selectedIndex);
    // stepper.selected.interacted = false;
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    // console.log('------------------------FORM------------------------------------');
    // console.log(this.codeIssuanceForm);
    // console.log('----------------------------------------------------------------');
    // console.log('--------------------------matStepper------------------------------ ');
    // console.log(stepper);
    stepper.next();
  }

  setTotalStepsCount(event: MatCheckboxChange) {
    this.totalStepsCount = event.checked ? ++this.totalStepsCount : --this.totalStepsCount;
  }


  onBarcodeAdd() {
    if (this.matStepper && this.matStepper.selected.interacted === true) {
      this.stepChanged(this.matStepper);
    }
    this.codeIssuanceService.addBarcode();
  }

  onBarcodeDelete(index: number) {
    this.codeIssuanceService.deleteBarcode(index);
  }

  onBarcodeClear(index: number) {
    this.codeIssuanceService.clearBarcode(index);
  }

  sendIssue() {
    const obj = this.codeIssuanceForm.getRawValue();
    const serializedObj = JSON.stringify(obj);
    console.log('form serializedObj');
    console.log(serializedObj);
  }

}

