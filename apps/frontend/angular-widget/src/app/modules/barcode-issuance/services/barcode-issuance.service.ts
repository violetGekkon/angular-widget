import { Injectable } from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { BarcodeIssuanceFormValidatorService } from './barcode-issuance-form-validator.service';
import { MomentConstructor, Moment } from '../../../ui/moment/moment-date-only';

const moment = MomentConstructor.getInstance();

@Injectable({
  providedIn: 'root',
})
export class BarcodeIssuanceService {
  public form: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private readonly validatorsService: BarcodeIssuanceFormValidatorService
  ) {
    this.form = this.fb.group(
      {
        claimNumber: this.fb.control(null, [Validators.required]),
        claimDate: this.fb.control(moment(), [Validators.required]),
        codes: this.fb.array([]),
        declarerDetails: this.fb.group({
          clientRegId: ['030000338925'],
          fullName: ['АО "ЦентрИнформ"'],
          inn: ['7841051711'],
          kpp: ['784105001'],
          address_ur: this.fb.group({
            description: ['ул. Образцова, д. 38'],
            country: ['643'],
            regionCode: ['77'],
          }),
          address: this.fb.group({
            description: ['ул. Образцова, д. 38'],
            country: ['643'],
            regionCode: ['77'],
          }),
        }),
        calculationDemand: this.fb.group({
          spirit: this.createSpirit(),
          wineMaterial: this.createWine(),
          rawAged: this.fb.group({
            exposureOneYear: this.createRawMaterial(),
            exposureThreeYear: this.createRawMaterial(),
            exposureFiveYear: this.createRawMaterial(),
            exposureSevenYear: this.createRawMaterial(),
          }),
          markedAP: this.fb.group({
            restFSM: this.createVolumeMarkedProduct(),
            requestFSM: this.createVolumeMarkedProduct(),
            totalVolumeAnhydrousSpirit: ['48.708', Validators.required],
            totalVolumeMarkedAP: ['91.12', Validators.required],
          }),
          productiveCapacity: this.fb.group({
            licensedActivity: ['111', Validators.required],
            powerMainTE: ['500.235', Validators.required],
            volumeMaxPeriod: ['500.235', Validators.required],
          }),
          wineMakingAP: this.fb.group({
            raw: this.createProduct('wine'),
            volumeGrape: ['1.0', Validators.required],
            volumeGrapeGeographical: ['1.0', Validators.required],
            volumeGrapeRegion: ['1.0', Validators.required],
            volumeGrapeGrowing: ['1.0', Validators.required],
            totalRaw: ['1.0', Validators.required],
          }),
        }),
      },
      {
        // validator: this.validatorsService.formValidator()
      }
    );
    // this.form.get('declarerDetails').disable();
  }

  get codes(): UntypedFormArray {
    const array = this.form.get('codes') as UntypedFormArray;
    return array;
  }

  get isValid(): boolean {
    if (!this.form.valid) {
      this.validatorsService.validateAllFormFields(this.form);
      return false;
    }
    return true;
  }

  addBarcode(): UntypedFormGroup {
    const codeGroup = this.barcodeFormGroup();
    codeGroup.setParent(this.codes);
    this.codes.controls.unshift(codeGroup);
    this.form.markAsDirty();
    return codeGroup;
  }

  deleteBarcode(index: number): void {
    this.codes.removeAt(index);
    this.form.markAsDirty();
  }

  clearBarcode(index: number): void {
    this.codes.at(index).reset();
    this.form.markAsDirty();
  }

  // barcodeFormGroup(): FormGroup {
  //   return this.fb.group({
  //     sampleFSM: ['ФСМ. Вина ликерные (особые). До 1 л'], // Заявленный образец ФСМ (пост. Правительства РФ от 11.07.2012  №704)
  //     alcPercent: ['40.1', Validators.required], // Содержание этилового спирта, %
  //     quantityDal: ['2000.0', Validators.required], // Объём маркируемой алкогольной продукции (дал)
  //     capacity: ['0.25', Validators.required], // Емкость, подлежащая маркировке потребительской тары алкогольной продукции (л)
  //     quantity: ['80000', Validators.required], // Количество запрашиваемых марок (шт.)
  //     vidAP171fz: ['', Validators.required], // Вид  алкогольной продукции
  //     // (в соответствии со ст. 2 ФЗ от 22.11.1995  №171-ФЗ)
  //     markType: ['132', Validators.required], // Код образца
  //   });
  // }

  barcodeFormGroup(): UntypedFormGroup {
    return this.fb.group({
      sampleFSM: ['ФСМ. Вина ликерные (особые). До 1 л'], // Заявленный образец ФСМ (пост. Правительства РФ от 11.07.2012  №704)
      alcPercent: [null, Validators.required], // Содержание этилового спирта, %
      quantityDal: [null, Validators.required], // Объём маркируемой алкогольной продукции (дал)
      capacity: [null, Validators.required], // Емкость, подлежащая маркировке потребительской тары алкогольной продукции (л)
      quantity: [null, Validators.required], // Количество запрашиваемых марок (шт.)
      vidAP171fz: [null, Validators.required], // Вид  алкогольной продукции
      // (в соответствии со ст. 2 ФЗ от 22.11.1995  №171-ФЗ)
      markType: [null, Validators.required], // Код образца
    });
  }

  createSpirit(): UntypedFormGroup {
    return this.fb.group({
      raw: this.createProduct('spirit'),
      volumeProducedRaw: this.createVolume(),
      volumeAnhydrousRest: ['12.000', Validators.required],
      volumeOutRaw: this.createVolume(),
      volumeReceivedRaw: this.fb.group({
        volumeFromAgingRaw: this.createVolume(),
        volumeBuyRaw: this.createVolume(),
        volumeConversionRaw: this.createVolume(),
      }),
      volumeUsedRaw: this.fb.group({
        volumeToAgingRaw: this.createVolume(),
        volumeToProducedRaw: this.createVolume(),
      }),
      claimImportRawType: this.fb.group({
        claimNumber: ['234567', Validators.required],
        claimDate: ['2020-01-10', Validators.required],
        sumAdvancePayment: ['569.568', Validators.required],
        volumeAnhydrousImp: ['56.587', Validators.required],
      }),
      totalRaw: ['0.1', Validators.required],
    });
  }

  createWine(): UntypedFormGroup {
    return this.fb.group({
      raw: this.createProduct('wine'),
      volumeProducedRaw: this.createVolume(),
      volumeAnhydrousRest: ['0.13', Validators.required],
      volumeOutRaw: this.createVolume(),
      volumeReceivedRaw: this.fb.group({
        volumeFromAgingRaw: this.createVolume(),
        volumeBuyRaw: this.createVolume(),
        volumeConversionRaw: this.createVolume(),
      }),
      volumeUsedRaw: this.fb.group({
        volumeToAgingRaw: this.createVolume(),
        volumeToProducedRaw: this.createVolume(),
      }),
      volumeEstimatedRest: ['0.0'],
      totalRaw: ['0.13', Validators.required],
    });
  }

  createProduct(type: string): UntypedFormGroup {
    return this.fb.group({
      alcCode: [
        type === 'spirit' ? '0016970000001187666' : '038265000001576625',
        Validators.required,
      ],
      fullName: [
        type === 'spirit'
          ? 'Спирт этиловый ректификованный из пищевого сырья "Люкс"'
          : 'Виноматериал виноградный столовый полусладкий розовый "Столовое розовое полусладкое"',
        Validators.required,
      ],
      alcVolume: [type === 'spirit' ? '96.31' : '11.00'],
      unitType: ['Unpacked'],
      productVCode: [type === 'spirit' ? '140' : '321'],
    });
  }

  createVolume(): UntypedFormGroup {
    return this.fb.group({
      volume20C: ['0.1', Validators.required],
      volumeAnhydrous: ['0.1', Validators.required],
    });
  }

  createRawMaterial(): UntypedFormGroup {
    return this.fb.group({
      typeRawMaterial: '1111',
      volumeSpirit: ['85.2368', Validators.required],
      volumeRestOld: ['200.21', Validators.required],
      volumeTransferred: ['50.258', Validators.required],
      volumeReturned: ['120.368', Validators.required],
      volumeRest: ['130.1', Validators.required],
    });
  }

  createVolumeMarkedProduct() {
    return this.fb.group({
      sampleFSM: 'sampleFsm[0].name',
      vidAP171fz: ['ликерное вино', Validators.required],
      volumeSpirit: ['23.568', Validators.required],
      volumeMarkedAP: ['60.56', Validators.required],
      capacity: ['0.235', Validators.required],
      amountFSM: ['50', Validators.required],
      volumeAnhydrousSpirit: ['24.354', Validators.required],
    });
  }
}
