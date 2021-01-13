import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { map } from 'rxjs/Operators'
import { Post } from './posts.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postForm: FormGroup
  posts: Post[]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    })
    this.getPost()
  }

  getPost() {
    this.http
      .get<{ [key: string]: Post }>(
        'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
      )
      .pipe(
        map((res) => {
          let posts: Post[] = []
          for (let key in res) {
            posts.push({ ...res[key], key })
          }
          return posts
        }),
      )
      .subscribe((res: Post[]) => {
        console.log('inside the get method')
        console.log(res)
        this.posts = res
      })
  }

  onCreatePost() {
    console.log(this.postForm.value)
    const postdata = this.postForm.value
    this.http
      .post<{ name: string }>(
        'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
        postdata,
      )
      .subscribe((res) => {
        console.log('inside the response')
        console.log(res)
        this.getPost()
      })
  }
}
