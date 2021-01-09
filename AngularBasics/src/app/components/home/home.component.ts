import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/Operators';

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

    this.intervalSubscription = customeObservable.pipe(map((data: number) => {
      return 'Count is ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    })

    // customeObservable.subscribe((data) => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log('complete');
    // })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
