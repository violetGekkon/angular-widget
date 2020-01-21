import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {DashboardCard} from '../card/model/dashboard-card.model';
import {DashboardCardsService} from '../services/dashboard-card-service.service';
import {ViewTableCardComponent} from '../card/view-table-card/view-table-card.component';
import {Subdivision} from '../../../shared/subdivision.model';
import {combineLatest, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MongoDBService} from '../services/mongo-db. service';


@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit, AfterViewInit {


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

  constructor(private cardsService: DashboardCardsService, private _formBuilder: FormBuilder, private mongoDB: MongoDBService) {
  }


  ngOnInit() {

    // console.log('fsrar = 030000' + getRandomInt(250100, 300900));
    this.organisation = 'OOO "ВИН_ПРОФИ"';
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.subdivisions$ = this.mongoDB.subdivisions;
    this.filter$ = this.firstFormGroup.controls['firstCtrl'].valueChanges.pipe(startWith(''));
    //
    this.filteredSubdivisions$ = combineLatest(this.subdivisions$, this.filter$).pipe(
      map(([subdivisions, filterString]) =>
        subdivisions.filter(subdivision => subdivision.kpp.indexOf(filterString) !== -1 || subdivision.factAddress.toUpperCase().indexOf(filterString.toUpperCase()) !== -1))
    );
  }

  ngAfterViewInit(): void {
    const container = document.getElementsByClassName('ci-subdiv-container');
    console.log(`ci-subdiv-container clientHeight = ${container.item(0).clientHeight}`);
    console.log(`ci-subdiv-container scrollHeight = ${container.item(0).scrollHeight}`);
  }

  createRecords() {
    console.log('createRecords start');
    // const count = 1000;
    // for (let i = 0; i < count; i++) {
    //   const subdivisionDto = {
    //     ownerID: '030000' + getRandomInt(250100, 300900),
    //     inn: '6455003704',
    //     kpp: '64550' + getRandomInt(1000, 5000),
    //     shortName: 'OOO "ВИН_ПРОФИ"',
    //     fullName: 'Oбщество с ограниченной ответственностью OOO "ВИН_ПРОФИ"',
    //     factAddress: 'РОССИЯ,,,УФА Г,,НОВОЖЕНОВА УЛ,ДОМ ' + getRandomInt(1, 10000),
    //     dejureAddress: 'РОССИЯ,,,УФА Г,,НОВОЖЕНОВА УЛ,ДОМ ' + getRandomInt(1, 10000),
    //     regionCode: '24'
    //   };
    //
    //   this.mongoDB.createSubdivisionRecord(subdivisionDto).subscribe();
    //
    // }

    const container = document.getElementsByClassName('ci-subdiv-container');
    console.log(`ci-subdiv-container clientHeight = ${container.item(0).clientHeight}`);
    console.log(`ci-subdiv-container scrollHeight = ${container.item(0).scrollHeight}`);
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
