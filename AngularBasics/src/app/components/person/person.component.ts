import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  user: { id: string; name: string };

  constructor(private route: ActivatedRoute, private router: Router,private userService: UserService) { }

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
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(data => {
      this.user.id = data.page;
      this.user.name = data.search;
    })

    this.route.fragment.subscribe(data => {
      console.log("fragmant");
      console.log(data);
    })
  }

  getDetails() {
    this.router.navigate(['/users', 2, 'Senith'],
      {
        queryParams: { page: 1, search: 'Manjitha' },
        fragment: 'loading'
      });
  }

  // onUserEdit() {
  //   this.router.navigate(['/users', this.user.id, this.user.name, 'edit'], {
  //     queryParamsHandling: 'preserve'
  //   });
  // }

  onUserEdit(){
    this.userService.addUser();
  }
}
