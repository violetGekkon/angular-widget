import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {sampleFsm, TypeInterface, vidAP171} from '../../interfaces/type-interface';


@Component({
  selector: 'app-barcode-item',
  templateUrl: './barcode-item.component.html',
  styleUrls: ['./barcode-item.component.scss']
})
export class BarcodeItemComponent implements OnInit, OnDestroy {

  vidAP = vidAP171;

  types704 = sampleFsm;
  public search_704Control = new UntypedFormControl();

  @Input() group: UntypedFormGroup;
  private onDestroy$ = new Subject<void>();

  constructor() {
  }

  ngOnInit() {
    // this.initType704Select();
    this.group.controls.vidAP171fz.setValue(vidAP171[0]);

  }

  // initType704Select() {
  //   this.types704.next(sampleFsm.slice());
  //   this.search_704Control.valueChanges
  //     .pipe(takeUntil(this.onDestroy$))
  //     .subscribe((value) => {
  //       const search = value.toLowerCase();
  //       // Фильтр по типу марки
  //       this.types704.next(
  //         sampleFsm.filter(fsm => fsm.name.toLowerCase().indexOf(search) > -1)
  //       );
  //     });
  // }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
