import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BarcodeIssuanceComponent} from './components/barcode-issuance/barcode-issuance.component';
import {SharedModule} from '../../ui/shared/shared.module';
import {DeclarerDetailsComponent} from './components/declarer-details/declarer-details.component';
import {BarcodesListComponent} from './components/barcodes-list/barcodes-list.component';
import {BarcodeItemComponent} from './components/barcode-item/barcode-item.component';
import {SpiritCalculationPartComponent} from './components/spirit-calculation-part/spirit-calculation-part.component';
import {VolumeTypeComponent} from './components/volume-type/volume-type.component';

@NgModule({
  declarations: [
    BarcodeIssuanceComponent,
    DeclarerDetailsComponent,
    BarcodesListComponent,
    BarcodeItemComponent,
    SpiritCalculationPartComponent,
    VolumeTypeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: BarcodeIssuanceComponent}
    ])
  ]

})
export class BarcodeIssuanceModule {
}
