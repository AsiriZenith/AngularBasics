import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postForm: FormGroup

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    })
  }

  onCreatePost() {
    console.log(this.postForm.value)
    const postdata = this.postForm.value
    this.http
      .post(
        'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
        postdata,
      )
      .subscribe((res) => {
        console.log('inside the response')
        console.log(res)
      })
  }
}
