import {AfterViewInit, Component, Injector, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AbstractDashboardCard} from '../abstract-dashboard-card';
import {DashboardCard} from '../model/dashboard-card.model';
import {WeatherService} from '../../services/weather.service';

// import * as D3 from 'd3';
import {color} from 'd3';


@Component({
  selector: 'app-view-table-card',
  templateUrl: './view-table-card.component.html',
  styleUrls: ['./view-table-card.component.scss']
})
export class ViewTableCardComponent extends AbstractDashboardCard implements OnInit, AfterViewInit {

  @ViewChild('containerPieChart', {static: false}) element: ElementRef;

  private host;
  private svg;
  private width: number;
  private height: number;
  private margin: number;
  private radius: number;
  private htmlElement: HTMLElement;
  private pieData = [150, 258, 52];

  constructor(private injector: Injector, private weatherService: WeatherService) {
    super(
      injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.COLOR)
    );
  }


  ngOnInit() {
    // this.weatherService.dailyForecast().subscribe(res => console.log(res));
  }

  ngAfterViewInit() {

    // this.htmlElement = this.element.nativeElement;
    // this.host = D3.select(this.htmlElement);
    // this.setup();
    // this.buildSVG();
    // this.buildPie();

  }

  private setup(): void {
    this.width = 240;
    this.height = 200;
    this.margin = 10;
    this.radius = Math.min(this.width, this.height) / 2 - this.margin;
  }

  // цепляем svg объект к div 'containerPieChart'
  private buildSVG(): void {
    this.host.html('');
    this.svg = this.host.append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`)
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
  }

//   private buildPie(): void {
//
//     // Переменная с суммой
//     const data_sum = arraySum(this.pieData);
//
//     // цвета
//     const pieColor = D3.scale.ordinal().range(['#D25851', '#1C75BB', '#D5CCD8']);
//
//     const pie = D3.layout.pie();
//
//     console.log(pie(this.pieData));
//
//     const arc = D3.svg.arc()
//       .innerRadius(this.radius * 0.6)
//       .outerRadius(this.radius * 0.8);
//
//     // Another arc that won't be drawn. Just for labels positionning
//     const outerArc = D3.svg.arc()
//       .innerRadius(this.radius * 0.9)
//       .outerRadius(this.radius * 0.9);
//
//     D3.selectAll('svg')
//       .insert('image', 'before')
//       .attr('xlink:href', '/assets/img/eagle.png')
//       .attr('x', '85')
//       .attr('y', '65')
//       .attr('width', '75')
//
//       .attr('height', '51');
//
// // Добавляем в svg текст с суммой документов
//     D3.selectAll('svg')
//       .insert('text', 'before')
//       .text(data_sum)
//       .style('font', '20px sans-serif')
//       .style('font-weight', 'bold')
//       .style('fill', 'D25851')
//       .attr('x', '103')
//       .attr('y', '135');
//
//     // Строим диаграмму: каждая часть pie - это часть, которую создаем используя arc функцию.
//     this.svg
//       .selectAll('allSlices')
//       .data(pie(this.pieData))
//       .enter()
//       .append('path')
//       .attr('d', arc)
//       .attr('fill', (datum, index) => {
//         return pieColor(`${index}`);
//       })
//       .attr('stroke', 'white')
//       .style('stroke-width', '2px')
//       .style('opacity', 1);
//
//     const r = this.radius;
//     this.svg
//       .selectAll('allPolylines')
//       .data(pie(this.pieData))
//       .enter().append('polyline')
//       .attr('stroke', 'black')
//       .style('fill', 'none')
//       .attr('stroke-width', 1)
//       .attr('points', function (d) {
//         const posA = arc.centroid(d); // line insertion in the slice
//         const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
//         const posC = outerArc.centroid(d); // Label position = almost the same as posB
//         const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
//
//         console.log('midangle = ' + midangle);
//         console.log('this.radius = ' + r);
//         console.log('(midangle < Math.PI ? 1 : -1) = ' + (midangle < Math.PI ? 1 : -1));
//
//         posC[0] = r * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
//         console.log('posC[0] = ' + posC[0]);
//         // posC[0] = 82
//         return [posA, posB, posC];
//       });
//
//
//     this.svg
//       .selectAll('allLabels')
//       .data(pie(this.pieData))
//       .enter().append('text')
//       .text((datum, index) => this.pieData[index])
//       .attr('transform', function (d) {
//         const pos = outerArc.centroid(d);
//         const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
//         pos[0] = r * 0.99 * (midangle < Math.PI ? 1 : -1);
//         return 'translate(' + pos + ')';
//       })
//       .style('text-anchor', function (d) {
//         const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
//         return (midangle < Math.PI ? 'start' : 'end');
//       });
//
//   }

}

// Функция считает сумму масива с документами
function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (sum);
}

