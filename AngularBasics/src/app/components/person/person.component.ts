import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  user: { id: string; name: string };

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name']
    }
  }

  // onCategoriesLink() {
  //   this.router.navigate(['/categories']);
  // }

}
