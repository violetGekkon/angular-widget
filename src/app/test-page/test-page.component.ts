import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {DashboardCard} from '../card/model/dashboard-card.model';
import {DashboardCardsService} from '../services/dashboard-card-service.service';
import {ViewTableCardComponent} from '../card/view-table-card/view-table-card.component';
import {Subdivision, sub} from '../interface/subdivision.model';
import {combineLatest, Observable, of} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {


  firstFormGroup: FormGroup;
  isSecondStepComlited = false;

  subdivisions$: Observable<Subdivision[]>;
  filteredSubdivisions$: Observable<Subdivision[]>;
  filter$: Observable<string>;

  genCertButtonClicked = false;

  isEditable = true;
  isGenerate = false;
  selectedSub;

  organisation;


  @ViewChild('stepper') stepper;

  constructor(private cardsService: DashboardCardsService, private _formBuilder: FormBuilder) {

  }


  ngOnInit() {
    this.organisation = 'OOO "ВИН_ПРОФИ"';
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.subdivisions$ = of(sub);
    this.filter$ = this.firstFormGroup.controls['firstCtrl'].valueChanges.pipe(startWith(''));
    //
    this.filteredSubdivisions$ = combineLatest(this.subdivisions$, this.filter$).pipe(
      map(([subdivisions, filterString]) =>
        subdivisions.filter(subdivision => subdivision.kpp.indexOf(filterString) !== -1 || subdivision.address.toUpperCase().indexOf(filterString.toUpperCase()) !== -1))
    );
  }

  createCard(): void {
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {key: DashboardCard.metadata.NAME, value: 'test'},
          routerLink: {key: DashboardCard.metadata.ROUTERLINK, value: '/test'},
          // iconClass: {key: DashboardCard.metadata.ICONCLASS, value: 'fa-users'},
          color: {key: DashboardCard.metadata.COLOR, value: 'green'}
        }, ViewTableCardComponent)
    );
  }

  createCert() {
    this.isEditable = !this.isEditable;
  }

  reset() {
    this.stepper.reset();
  }

  // Клик по карточке с местом осуществления деятельности
  selectSubdivision(subdiv: Subdivision) {
    this.selectedSub = subdiv;
    console.log(this.selectedSub);
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  clearField() {
    this.firstFormGroup.get('firstCtrl').setValue('');
    this.selectedSub = null;
  }

}
