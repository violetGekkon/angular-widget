import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Link} from '../../interfaces/reference-book.interface';


@Component({
  selector: 'app-reference-books-administration',
  templateUrl: './reference-books-administration.component.html',
  styleUrls: ['./reference-books-administration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceBooksAdministrationComponent implements OnInit {

  title = 'Администрирование справочников';

  administrationSectionLinks: Link[] = [
    { title: 'Общероссийский классификатор стран мира ОК (МК (ИСО 3166) 004-97) 025-2001', url: 'country' },
    { title: 'Справочник субъектов Российской Федерации', url: 'region' },
    { title: 'Справочник емкости', url: 'capacity' },
    { title: 'Справочник крепости', url: 'strength' },
  ];

  ngOnInit(): void {
    this.administrationSectionLinks = this.administrationSectionLinks.map((link, id) =>
      ({ ...link, id: id + 1 })
    );
  }

}
