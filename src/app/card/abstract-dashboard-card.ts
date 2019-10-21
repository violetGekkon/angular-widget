export abstract class AbstractDashboardCard {
  constructor(private _name: string,
              private _routerLink: string,
              private _color: string) {
  }

  get name(): string {
    return this._name;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  get color(): string {
    return this._color;
  }
}
