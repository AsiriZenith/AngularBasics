import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log("Home Component");
      console.log(data);
    });

    // this.intervalSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    let customeObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('count is greater than 3');
        }
        if (count > 2) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    customeObservable.subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
