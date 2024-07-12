import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataRoleService {
  constructor(private http: HttpClient) {}
  role: 'Пользователь' | 'Администратор' = 'Пользователь';
  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
