import { Component } from '@angular/core';
import { Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  intervalSubscrip1$!: Subscription;
  intervalSubscrip2$!: Subscription;

  constructor() {}
  massNumber1 = [0];
  massNumber2 = ['Random Value:'];
  enableInterval() {
    const intervalStream = interval(2000);
    this.massNumber1 = [];
    this.intervalSubscrip1$ = intervalStream.subscribe((next) => {
      this.massNumber1.push(next);
    });
    this.massNumber2 = [];
    this.intervalSubscrip2$ = intervalStream
      .pipe(
        map((next) => `Random Value: ${Math.floor(Math.random() * 100)}`)
      )
      .subscribe((next) => {
        this.massNumber2.push(next);
      });
  }

  disableInterval() {
    this.intervalSubscrip1$.unsubscribe();
    this.intervalSubscrip2$.unsubscribe();
  }
}
