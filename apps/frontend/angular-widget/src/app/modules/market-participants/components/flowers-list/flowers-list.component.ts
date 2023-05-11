import { Component, OnInit, ViewChild } from '@angular/core';
import { FlowersHttpService } from '../../services/flowers-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowersFacade } from '../../flowers-facade.service';
import { Flower } from '../../mock-flowers';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.scss'],
})
export class FlowersListComponent implements OnInit {
  columns: any[] = [
    {
      name: 'fullName',
      description: 'Полное наименование',
      type: 'text',
      cell: (element: Flower) => `${element.fullName.russian}`,
    },
    {
      name: 'type',
      description: 'Тип',
      type: 'text',
      cell: (element: Flower) => `${element.type}`,
    },
    {
      name: 'genus',
      description: 'Род',
      type: 'text',
      cell: (element: Flower) => `${element.genus}`,
    },
    {
      name: 'sort',
      description: 'Сорт',
      type: 'text',
      cell: (element: Flower) => `${element.sort}`,
    },
    {
      name: 'family',
      description: 'Семейство',
      type: 'text',
      cell: (element: Flower) => `${element.family.latin}`,
    },
  ];
  columnsToDisplay = this.columns.map((col) => col.name);
  dataSource = [];

  constructor(
    private facade: FlowersFacade,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.facade.flowers().subscribe((val) => (this.dataSource = val));
  }

  goToDetail(flower: Flower) {
    this.router.navigate([flower.id], { relativeTo: this.route });
  }
}
