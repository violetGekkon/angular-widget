import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';

@Component({
  selector: 'app-view-table-card',
  templateUrl: './view-table-card.component.html',
  styleUrls: ['./view-table-card.component.scss'],
})
export class ViewTableCardComponent implements OnInit {
  @ViewChild('containerPieChart') element: ElementRef;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.dailyForecast().subscribe((res) => console.log(res));
  }
}

// Функция считает сумму масива с документами
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
