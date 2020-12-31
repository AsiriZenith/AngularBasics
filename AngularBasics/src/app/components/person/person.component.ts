import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  user: { id: string; name: string };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.route.params.subscribe((data: Params) => {
      this.user = {
        id: data['id'],
        name: data['name']
      }
    });
  }

  getDetails() {
    this.router.navigate(['/users', 2, 'Senith'],
      {
        queryParams: { page: 1, search: 'Manjitha' },
        fragment: 'loading'
      });
  }

}
