import {InjectionToken} from '@angular/core';

export class DashboardCard {

  static metadata: any = {
    NAME: new InjectionToken<string>('name'),
    ROUTERLINK: new InjectionToken<string>('routerLink'),
    COLOR: new InjectionToken<string>('color')
  };

  constructor(private input: {
                name: {
                  key: InjectionToken<string>,
                  value: string
                },
                routerLink: {
                  key: InjectionToken<string>,
                  value: string
                },
                color: {
                  key: InjectionToken<string>,
                  value: string,
                }
              },
              private component: any

              // private services:
              //   {provide: any, useClass: any, deps: any[]}[]

  ) {
  }

  get inputs(): any {
    return this.input;
  }

  get components(): any {
    return this.component;
  }

  // get services(): any {
  //   return this.services;
  // }
}
