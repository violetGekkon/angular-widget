import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-volume-type',
  templateUrl: './volume-type.component.html',
  styleUrls: ['./volume-type.component.scss']
})
export class VolumeTypeComponent implements OnInit {

  @Input() group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
