import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MomentConstructor, Moment} from '../../moment/moment-date-only';
import {MAT_DATE_FORMATS} from '@angular/material/core';

const moment = MomentConstructor.getInstance();

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD.MM.YYYY',
  },
  display: {
    dateInput: 'DD.MM.YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'MMM',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {

  private _date = moment();
  _isDisabled = false;

  get date() {
    return this._date;
  }

  @Input() ph: string;

  @Input()
  set date(val) {
    this._date = val;
    console.log('date stringify = ' + JSON.stringify(this.date));
    this.onChange(this._date);
  }

  onChange(_: any) {
  }

  constructor() {
  }

  writeValue(date: any): void {
    console.log('writeValue begin = ' + JSON.stringify(this.date));
    if (date) {
      console.log('date form = ' + date);
      this.date = date;
    }
    console.log('writeValue end = ' + JSON.stringify(this.date));
  }

  change(event) {
    this.date = event.value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  registerOnTouched(fn: any): void {
  }

}
