import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs/Operators'
import { Post } from '../components/posts/posts.model'

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPost() {
    return this.http
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
  }

  createPost(postdata: Post) {
    return this.http.post<{ name: string }>(
      'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
      postdata,
    )
  }

  clearPost() {
    return this.http.delete(
      'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
    )
  }
}
