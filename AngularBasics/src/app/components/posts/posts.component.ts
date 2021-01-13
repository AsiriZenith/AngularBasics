import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PostService } from '../../services/posts.service'
import { Post } from './posts.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postForm: FormGroup
  posts: Post[]
  error: string

  constructor(private postservice: PostService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    })
    this.getPost()
  }

  getPost() {
    this.postservice.fetchPost().subscribe(
      (data) => {
        this.posts = data
        console.log('Inside the get post')
      },
      (error) => {
        console.log('error occured inside the get post')
        this.error = error.message
        console.log(error)
      },
    )
  }

  onCreatePost() {
    console.log(this.postForm.value)
    const postdata = this.postForm.value
    this.postservice.createPost(postdata).subscribe(
      (res) => {
        console.log('Inside the create post')
        console.log(res)
        this.getPost()
        this.postForm.reset()
      },
      (error) => {
        console.log('Error occured inside create post')
        this.error = error.message
        console.log(error)
      },
    )
  }

  onClearPost(event: Event) {
    event.preventDefault()
    this.postservice.clearPost().subscribe((res) => {
      console.log('Inside the clear post')
      console.log(res)
    })
    this.getPost()
  }
}
