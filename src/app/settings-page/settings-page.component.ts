import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';


export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  isLeftVisible = true;
  settingsList = [];
  displayedColumns: string[] = ['name', 'description'];
  dataSource: MatTableDataSource<{ name: string, description: string }>;
  length;
  xsdText = '';

  data$: Observable<User[]> = this.dataService.getFakeData();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dataService: DataService) {

  }

  ngOnInit() {

    this.dataService.getXsdList().subscribe((data: { name: string, description: string }[]) => {
      this.dataSource = new MatTableDataSource<{ name: string, description: string }>(data);
      this.dataSource.paginator = this.paginator;
    });


    this.settingsList = [
      {title: 'Настройки УТМ'},
      {title: 'Сертификаты'},
      {title: 'XML схемы'},
      {title: 'Фильтр IP-адресов'}
    ];

  }

  rowClicked(row: any) {
    this.dataService.getXsd(row.name).subscribe(content => {
      this.xsdText = content;
      this.isLeftVisible = !this.isLeftVisible;
    });
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
