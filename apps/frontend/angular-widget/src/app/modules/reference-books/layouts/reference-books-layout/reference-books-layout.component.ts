import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-books-layout',
  templateUrl: './reference-books-layout.component.html',
  styleUrls: ['./reference-books-layout.component.scss'],
})
export class ReferenceBooksLayoutComponent {
  @Input() headerTitle;
}
