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

  doComparisionByMoment(target: Date, comparision: Date) {
    return moment(target) === moment(comparision)
  }
}
