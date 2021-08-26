import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MarketParticipantHttpService} from '../../services/market-participant-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IMarketParticipant, firmTypeMap} from '../../interfaces/market-participant';
import {Filter} from '../../interfaces/filters.interface';
import {FiltersComponent} from '../filters/filters.component';

@Component({
  selector: 'app-market-participants',
  templateUrl: './market-participants.component.html',
  styleUrls: ['./market-participants.component.scss']
})
export class MarketParticipantsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['fsrarId', 'firmType', 'fullName', 'inn', 'kpp'];
  dataSource = [];

  @ViewChild(FiltersComponent) filter: FiltersComponent;

  licFilter: Filter[] = [0, 1, 2, 3].map(idx => ({id: idx, active: false}));

  constructor(private service: MarketParticipantHttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAllMarketParticipants().subscribe(val =>
      this.dataSource = val
    );

    this.service.getLicenseGroup().subscribe(serverFilters => {
      console.log(serverFilters);
      this.licFilter = this.licFilter.map(filter => {
        console.log('old ', filter);
        let newFilter;
        for (let i = 0; i < serverFilters.length; i++) {
          console.log('new ', serverFilters);
          if (serverFilters[i].id === filter.id) {
            newFilter = {...filter, count: serverFilters[i].count, title: serverFilters[i].title};
            console.log('concat ', newFilter);
            return newFilter;
          }
        }
      });
    });
  }

  ngAfterViewInit() {
    this.filter.changeFilter.subscribe(val => console.log(val));
  }

  goToDetail(organization: IMarketParticipant) {
    this.router.navigate([firmTypeMap.get(organization.firmType)], {relativeTo: this.route});
  }

}
