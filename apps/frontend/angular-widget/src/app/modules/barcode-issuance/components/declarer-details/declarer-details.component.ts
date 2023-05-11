import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-declarer-details',
  templateUrl: './declarer-details.component.html',
  styleUrls: ['./declarer-details.component.scss'],
})
export class DeclarerDetailsComponent implements OnInit {
  @Input() group: UntypedFormGroup;

  get address_ur(): UntypedFormGroup {
    return this.group.get('address_ur') as UntypedFormGroup;
  }

  get address(): UntypedFormGroup {
    return this.group.get('address') as UntypedFormGroup;
  }

  constructor() {}

  ngOnInit() {}
}
