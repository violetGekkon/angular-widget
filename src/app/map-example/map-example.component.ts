import {Component, OnDestroy, OnInit} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {BehaviorSubject, EMPTY, from, merge, of, Subject} from 'rxjs';
import {concatMap, delay, map, mergeAll, mergeMap, startWith, switchMap, takeUntil} from 'rxjs/operators';

export interface Food {
  value: string;
  viewValue: string;
}

// Данные
const data = of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
]);


@Component({
  selector: 'app-another-test-page',
  templateUrl: './map-example.component.html',
  styleUrls: ['./map-example.component.scss']
})

export class MapExampleComponent implements OnInit, OnDestroy {

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  private onDestroy$ = new Subject();

  items = [
    {'link': '/testlist', 'title': 'Глава 3', 'fragment': 'bar-3'},
    {'link': '/testlist', 'title': 'Глава 4', 'fragment': 'bar-4'},
    {'link': '/testlist', 'title': 'Глава 5', 'fragment': 'bar-5'}
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  theme = 'egais-lite-theme';

  selected = 'option2';

  constructor(private overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);

    // Примеры map для Observable

    // Просто выводим данные в строковом представлении
    data
      .pipe(takeUntil(this.onDestroy$),
        map(cars => cars.map(car => `${car.brand} ${car.model}`))
      ).subscribe(cars => console.log(cars));


    // имитация запроса на сервер
    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      );
    };


    //  Для каждого возвращаемого значения из потока Observable [1,2,3]
    // необходимо сделать запрос, который тоже возвращает Observable
    // можно так
    // from([1,2,3,4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log(data)));

    // но это подписка внутри подписки => некрасиво
    // from([1,2,3,4]) - это ‘внешний’ Observable
    // getData() - это ‘внутренний’ Observable
    // можно использовать mergeAll и  map

    // использование map и mergeAll
    // MergeAll позаботится о подписке на внутренний Observable
    from([1, 2, 3, 4]).pipe(
      map(param => getData(param)),
      mergeAll()
    ).subscribe(val => console.log(val));

    // использование mergeMap
    from([1, 2, 3, 4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log(val));

    // SwitchMap - тоже подписывается на внутренний Observable,
    // только SwitchAll отменяет предыдущую подписку и подписывается на новую
    // в примере ниже getData вернет значение только для последней подписки

    from([1, 2, 3, 4]).pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log(val));


    // SwitchMap полезно для сценариев, где для потока данных необходимо применить список фильтров
    // Если в процессе внесения изменений фильтрами обновились данные, предыдущая подписка будет отменена
    // и появится новая подписка с новыми данными
    const filters = ['brand=porsche', 'model=911', 'horsepower=389', 'color=red'];
    const activeFilters = new BehaviorSubject('');

    const applyFilters = () => {
      filters.forEach((filter, index) => {

        let newFilters = activeFilters.value;
        if (index === 0) {
          newFilters = `?${filter}`;
        } else {
          newFilters = `${newFilters}&${filter}`;
        }

        activeFilters.next(newFilters);
      });
    };

    activeFilters.pipe(
      switchMap(param => getData(param))
    ).subscribe(val => console.log(val));

    applyFilters();

    // concatMap - тоже подписывается на внутренний Observable
    // но в отличие от switchMap, который отписывается от внутреннего Observable
    // если Observable-источник эмитит новое значение, concatMap не будет подписываться на
    // новый внутренний Observable, пока не завершится предыдущий.
    const getData2 = (param) => {
      const delayTime = Math.floor(Math.random() * 10000) + 1;
      return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
        delay(delayTime)
      );
    };

    // map
    // from([1, 2, 3, 4]).pipe(
    //   map(param => getData2(param))
    // ).subscribe(val => val.subscribe(d => console.log('map:', d)));

    // mergeMap
    // from([1, 2, 3, 4]).pipe(
    //   mergeMap(param => getData2(param))
    // ).subscribe(val => console.log('mergeMap:', val));


    // concatMap
    // from([1, 2, 3, 4]).pipe(
    //   concatMap(param => getData2(param)),
    // ).subscribe(myObserver('concatMap'));

    //   Map is for mapping ‘normal’ values to whatever format you need it to be.
    //   The return value will be wrapped in an Observable again, so you can keep using it in your data stream.
    //   When you have to deal with an ‘inner’ Observable it’s easier to use mergeMap, switchMap or concatMap.
    //   Use mergeMap if you simply want to flatten the data into one Observable,
    //   use switchMap if you need to flatten the data into one Observable but only need the latest value
    //   and use concatMap if you need to flatten the data into one Observable and the order is important to you.


    // merge оператор подписывается на внутренние Observable и эмитит их значения
    merge(getData2('merge1'), getData2('merge2'))
      .subscribe(myObserver('merge'));

  }

  onThemeChange() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }


}


const myObserver = (operator: string) => {
  return {
    next: (x: string) => console.log(`${operator} observer got a next value: ${x}`),
    error: (err: Error) => console.error(`${operator} observer got a next value: ${err}`),
    complete: () => console.log(`${operator} observer got a complete notification`),
  };
};
