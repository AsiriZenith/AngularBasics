import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, switchMap, take, tap } from 'rxjs/Operators'
import { Post } from '../components/posts/posts.model'
import { AuthService } from './auth.service'

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient, private authservice: AuthService) {}

  fetchPost() {
    this.authservice.userSub.pipe(
      take(1),
      switchMap((user) => {
        let searchParams = new HttpParams()
        searchParams = searchParams.append('auth', user.token)
        return this.http.get<{ [key: string]: Post }>(
          'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
          {
            params: searchParams,
          },
        )
      }),
      map((res) => {
        let posts: Post[] = []
        for (let key in res) {
          posts.push({ ...res[key], key })
        }
        return posts
      }),
    )

    // .pipe(
    //   map((res) => {
    //     let posts: Post[] = []
    //     for (let key in res) {
    //       posts.push({ ...res[key], key })
    //     }
    //     return posts
    //   }),
    // )
  }

  createPost(postdata: Post) {
    return this.http.post<{ name: string }>(
      'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
      postdata,
      {
        observe: 'response',
      },
    )
  }

  clearPost() {
    return this.http
      .delete(
        'https://angularbasic-402cf-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        },
      )
      .pipe(
        tap((res) => {
          if (res.type === HttpEventType.Sent) {
            console.log('Request sent')
          }
          if (res.type === HttpEventType.Response) {
            console.log(res)
          }
        }),
      )
  }
}
