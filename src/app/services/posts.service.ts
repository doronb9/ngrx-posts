import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44362/posts';

  getPosts(page: number, next: number): Observable<any> {
    return this.http.post(this.url, { page, next })
  }
}
