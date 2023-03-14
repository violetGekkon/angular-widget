import {Component, Input, OnInit} from '@angular/core';
import {FlowersHttpService} from '../../services/flowers-http.service';
import {firmTypeMap} from '../../interfaces/market-participant';
import {ActivatedRoute, Router} from '@angular/router';
import {Filter} from '../../interfaces/filters.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() type = firmTypeMap.values().next().value;


  displayedColumns: string[] = ['fsrarId', 'firmType', 'fullName', 'inn', 'kpp'];
  dataSource = [];

  constructor(private service: FlowersHttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.service.getCounterparties().subscribe(val =>
      this.dataSource = val
    );
  }

  goToDetail(organization) {
    console.log(this.route);
    this.router.navigate([firmTypeMap.get(organization.firmType)], {relativeTo: this.route.parent});
  }


}
