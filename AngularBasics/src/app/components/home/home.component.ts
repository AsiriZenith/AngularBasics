import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  intervalSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      console.log("Home Component");
      console.log(data);
    });

    this.intervalSubscription = interval(1000).subscribe(count => {
      console.log(count);
    })
  }
  
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
