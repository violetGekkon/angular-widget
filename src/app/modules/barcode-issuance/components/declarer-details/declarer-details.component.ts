import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-declarer-details',
  templateUrl: './declarer-details.component.html',
  styleUrls: ['./declarer-details.component.scss']
})
export class DeclarerDetailsComponent implements OnInit {

  @Input() group: FormGroup;

  constructor() {
  }

  ngOnInit() {

  }

}
