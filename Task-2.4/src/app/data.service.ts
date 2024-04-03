import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getButton1() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getButton2() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {
      params: { postId: 1 },
    });
  }

  postButton3() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      body: null,
    });
  }

  getButton4() {
    return this.http.get('https://jsonplaceholder.typicode.com/post');
  }

  getButton5() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', {
      headers: { 'X-Test': '1' },
      responseType: 'text',
    });
  }

  deleteButton6() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }

  getResolve() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
