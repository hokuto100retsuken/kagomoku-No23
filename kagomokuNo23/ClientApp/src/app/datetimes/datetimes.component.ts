import {
  Component
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-datetimes',
  templateUrl: './datetimes.component.html'
})
export class DateTimesComponent {

  public targetDate = new Date(2019, 8, 24);
  public comparisonDate: Date = new Date(2019, 8, 24);

  moment: moment.Moment;

  constructor() {
    
  }

  doComparisionByDate(target: Date, comparision: Date):boolean {
    return target === comparision;
  }

  doComparisionByMoment(target: Date, comparision: Date): boolean {
    return moment(target) === moment(comparision);
  }

  doComparisionByNumber(target: Date, comparision: Date): boolean {
    console.log(target, comparision);
    return target.getFullYear() === comparision.getFullYear() &&
      target.getMonth() === comparision.getMonth() &&
      target.getDate() === comparision.getDate();
  }

  doComparisionByMomentIsSame(target: Date, comparision: Date): boolean {
    return moment(target).isSame(moment(comparision));
  }
}
