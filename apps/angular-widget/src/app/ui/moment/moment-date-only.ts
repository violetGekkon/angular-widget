import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

export class MomentConstructor {
  static getInstance() {
    const original = _rollupMoment || _moment;
    original.prototype.toJSON = function () {
      return this.format('YYYY-MM-DD');
    };
    return original;
  }
}

export interface Moment extends _moment.Moment {}
