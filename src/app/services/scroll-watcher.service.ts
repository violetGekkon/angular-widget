import {Inject, Injectable} from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/overlay';
import {fromEvent, Observable, ReplaySubject, Subject} from 'rxjs';
import {auditTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

export interface ScrollingElement {
  element: Element;
  index: number;
}

export class ScrollWatchedElement implements ScrollingElement {
  _top = 0;

  constructor(public readonly element: Element, public readonly index: number) {
  }

  setTop(topOffset: number, scrollTop: number) {
    console.log(this.element.id + ' top = ' + this.element.getBoundingClientRect().top);
    this._top = scrollTop + this.element.getBoundingClientRect().top - topOffset;
    console.log('elem.top = ' + this._top);
  }

}

export class ScrollWatcherResult {
  active: Observable<ScrollingElement | null>;
  stopWatching: () => void;
}

export class ScrollWatchedElementSet {
  activeElement: ReplaySubject<ScrollingElement | null> = new ReplaySubject(1);
  private scrollWatchedElements: ScrollWatchedElement[];

  constructor(elements: Element[]) {
    this.scrollWatchedElements = elements.map((elem, i) => new ScrollWatchedElement(elem, i));
  }

  calculate(topOffset: number, scrollTop: number) {
    this.scrollWatchedElements.forEach(scrollElement => {
      scrollElement.setTop(topOffset, scrollTop);
    });
    this.scrollWatchedElements.sort((a, b) => b._top - a._top);
  }

  /**
   * Метод для определения элемента, находящегося в окне просмотра
   *
   * @param scrollTop - scrollTop контейнера
   * @param maxScrollHeight - максимальное значение прокрутки
   */

  onScroll(scrollTop: number, maxScrollHeight: number) {
    let activeItem: ScrollingElement | null = null;

    if (scrollTop + 1 >= maxScrollHeight) {
      activeItem = this.scrollWatchedElements[0];
    } else {
      this.scrollWatchedElements.some(watchedElement => {
        if (watchedElement._top <= scrollTop) {
          activeItem = watchedElement;
          return true;
        }
        return false;
      });
    }
    this.activeElement.next(activeItem);
  }
}

/**
 * Сервис для наблюдения за элементами прокутки
 *
 * Контейнер, в котором содержится контент приложения - mat-sidenav-content (overflow-y: auto)
 * Используя ScrollDispatcher подписываемся на scroll events контейнера
 *
 */

@Injectable({
  providedIn: 'root'
})

export class ScrollWatcherService {

  private matContainer = this.doc.querySelector('mat-sidenav-content');
  private scrollWatchedElementSets: ScrollWatchedElementSet[] = [];
  private scrollHeight;
  private maxScrollHeight;

  private stopTrack$ = new Subject();
  private scrollEvents = this.scroll.scrolled(10).pipe(takeUntil(this.stopTrack$));
  private resizeEvents = fromEvent(window, 'resize').pipe(auditTime(300), takeUntil(this.stopTrack$));


  constructor(@Inject(DOCUMENT) private doc: any,
              private scroll: ScrollDispatcher) {
  }

  /**
   * Метод для добавления очередного сета наблюдаемых элементов.
   * Если массив сетов пустой, то необходимо подписаться на изменения размеров окна просмотра,
   * а также на изменение height окна просмотра.
   *
   *
   * @param watchedElements - массив элементов, за которыми наблюдаем во время прокрутки
   *
   * active - элемент, который в настоящий момент (при текущих значениях параметров контейнера и значении его scrollTop)
   * находится в окне просмотра
   */
  watch(watchedElements: Element[]) {
    console.log('-------------------------------------------------------------------------');
    if (!this.scrollWatchedElementSets.length) {
      console.log('this.scrollWatchedElementSets.length === 0');
      this.scrollEvents.subscribe(() => this.onScroll());
      this.resizeEvents.subscribe(() => this.onResize());
      this.onResize();
    }

    const scrollTop = this.matContainer.scrollTop;
    console.log('scrollTop = ' + scrollTop);
    const maxScrollHeight = this.matContainer.scrollHeight;
    console.log('maxScrollHeight = ' + maxScrollHeight);
    const topOffset = this.getTopOffset();
    console.log('topOffset = ' + topOffset);

    const elementSet = new ScrollWatchedElementSet(watchedElements);
    elementSet.calculate(topOffset, scrollTop);
    elementSet.onScroll(scrollTop, maxScrollHeight);

    this.scrollWatchedElementSets.push(elementSet);

    return {
      active: elementSet.activeElement.asObservable().pipe(distinctUntilChanged()),
      stopWatching: () => this.stopWatching(elementSet)
    };

  }

  /**
   * Метод, выполняемый во время события прокрутки
   * Если после установки наблюдения за элементами, высота контейнера изменилась,
   * тогда пересчитываем параметры элементов
   */
  onScroll() {
    if (this.scrollHeight !== this.matContainer.scrollHeight) {
      this.onResize();
    }

    const scrollTop = this.matContainer.scrollTop;
    const maxScrollTop = this.matContainer.scrollHeight;
    this.scrollWatchedElementSets.forEach(set => set.onScroll(scrollTop, maxScrollTop));
  }

  /**
   * Метод для перерасчета параметров элементов (с изменением размеров контейнера, значение отступа елементов относительно верха
   * контейнера также меняется), установки высоты контейнера и максимальной высоты прокрутки в случае изменения параметров контейнера
   * (изменилось значение scrollHeight контейнера или произошло событие window:resize)
   */
  private onResize() {
    console.log('onResize');
    this.scrollHeight = this.matContainer.scrollHeight;
    console.log('scrollHeight = ' + this.scrollHeight);
    const viewportHeight = this.matContainer.clientHeight;
    this.maxScrollHeight = this.scrollHeight - viewportHeight;

    const topOffset = this.getTopOffset();
    const scrollTop = this.matContainer.scrollTop;
    console.log('matContainer.scrollTop = ' + scrollTop);

    this.scrollWatchedElementSets.forEach(elementSet => elementSet.calculate(topOffset, scrollTop));
  }

  private getTopOffset() {
    const toolbar = document.querySelector('mat-toolbar');
    return toolbar && toolbar.clientHeight + 30 || 0;
  }


  /**
   * Метод для остановки наблюдения за элементами и завершения отправки значения активного элемента подписчикам
   * Сет наблюдаемых элементов удаляется из общего массива, и если массив опустел, тогда перестаем отслеживать изменения параметров
   * контейнера и window:resize
   *
   * @param watchedElements - сет наблюдаемых элементов
   */
  stopWatching(watchedElements: ScrollWatchedElementSet) {
    watchedElements.activeElement.complete();
    this.scrollWatchedElementSets = this.scrollWatchedElementSets.filter(watchedElementSet => watchedElementSet !== watchedElements);
    if (!this.scrollWatchedElementSets.length) {
      this.stopTrack$.next(true);
    }
  }

}

