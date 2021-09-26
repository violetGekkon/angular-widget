import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MarketParticipantHttpService} from '../../services/market-participant-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IMarketParticipant, firmTypeMap} from '../../interfaces/market-participant';
import {Filter} from '../../interfaces/filters.interface';
import {FiltersComponent} from '../filters/filters.component';
import {MarketParticipantsFacade} from '../../market-participants.facade';
import {map, filter} from 'rxjs/operators';
import {IMarketParticipantFilter} from '../../interfaces/market-participant-filter.interface';

import moment from 'moment';
import {ReferenceBookResolver} from '../../../reference-books/services/reference-book.resolver';

@Component({
  selector: 'app-market-participants',
  templateUrl: './market-participants.component.html',
  styleUrls: ['./market-participants.component.scss']
})
export class MarketParticipantsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['fsrarId', 'firmType', 'fullName', 'inn', 'kpp'];
  dataSource = [];

  links = ['справочник ёмкости', 'справочник сырья'];

  @ViewChild(FiltersComponent) licGroupsFilters: FiltersComponent;

  filters: IMarketParticipantFilter;
  licFilters: Filter[] = [0, 1, 2, 3].map(idx => ({id: idx, active: false}));

  constructor(private service: MarketParticipantHttpService,
              private facade: MarketParticipantsFacade,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {

    const time = moment.unix(1632147685).format('DD.MM.YYYY hh:mm');
    console.log(time);

    const ts = moment('22.09.2021 21:00', 'DD MMM YYYY hh:mm').unix();
    const m = moment.unix(ts);

    console.log(ts);
    if (this.facade.getStateFromStorage()) {
      this.filters = this.facade.getStateFromStorage();
    }

    this.service.getAllMarketParticipants().subscribe(val =>
      this.dataSource = val
    );

    this.service.getLicenseGroup().subscribe(serverFilters => {
      if (!this.filters || !this.filters?.companyParams?.licenses_groups) {
        this.licFilters = serverFilters;
        return;
      }
      const savedLicFilters = this.filters.companyParams.licenses_groups.split(',').map(val => ({title: val}));
      this.licFilters = serverFilters.map((serverFilter: Filter) => {
        const newFilter = serverFilter;
        for (const savedFilter of savedLicFilters) {
          if (serverFilter.title === savedFilter.title) {
            newFilter.active = true;
          }
        }
        return newFilter;
      });
    });

  }

  ngAfterViewInit() {
    this.licGroupsFilters.changeFilter
      .pipe(
        map((val: Filter[]) => val.filter(item => item.active)),
        filter(filters => !!filters)
      )
      .subscribe(val => {
        console.log(val);
        this.filters = {...this.filters, companyParams: {licenses_groups: val.map(item => item.title).toString()}};
        this.facade.saveFiltersAndGetFilteredList(this.filters);
      });
  }

  goToDetail(organization: IMarketParticipant) {
    this.router.navigate([firmTypeMap.get(organization.firmType)], {relativeTo: this.route});
  }

}
