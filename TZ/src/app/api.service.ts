import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import * as Notiflix from 'notiflix';
import { Observable, tap } from 'rxjs';
import { ToggleLike } from 'src/store/recipe.state';
import { Post, Posts } from './interface/posts';
import { RegisterUser, User, Users } from './interface/user';

interface AuthResponse {
  user: 'admin' | 'user' | 'gost';
  id: string;
  jwtToken: string;
  firstName: string;
  lastName: string;
  role: string;
  username: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public id!: string | null;
  public avatar!: string | null;
  public firstName!: string | null;
  public lastName!: string | null;
  public username!: string | null;

  public token!: string | null;

  public role: string | null = 'gost';

  private apiUrlUsers = 'https://evo-academy.wckz.dev/api/cooking-blog/users';
  private apiUrlPosts = 'https://evo-academy.wckz.dev/api/cooking-blog/posts';

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {
    this.id = localStorage.getItem('id');
    this.avatar = localStorage.getItem('avatar');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.username = localStorage.getItem('username');
    this.token = localStorage.getItem('jwt');
    this.role = localStorage.getItem('role');
  }

  @Select(
    (state: { recipes: { likedRecipes: string } }) => state.recipes.likedRecipes
  )
  likedRecipes$!: Observable<string[]>;

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.apiUrlPosts}`);
  }

  getPost(uuid: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrlPosts}/${uuid}`);
  }

  createPost(resept: object): Observable<Post> {
    return this.http.post<Post>(
      'https://evo-academy.wckz.dev/api/cooking-blog/posts/create',
      resept,
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }

  deletePost(uuid: string): Observable<Post> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.delete<Post>(`${this.apiUrlPosts}/${uuid}`, { headers });
  }

  updatePost(uuid: string, resept: object): Observable<Post> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.patch<Post>(`${this.apiUrlPosts}/${uuid}`, resept, { headers });
  }

  getUsers(): Observable<Users[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<Users[]>(`${this.apiUrlUsers}`, { headers });
  }

  getUser(uuid: string): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<User>(`${this.apiUrlUsers}/${uuid}`, { headers });
  }

  deleteUser(uuid: string): Observable<User> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.delete<User>(`${this.apiUrlUsers}/${uuid}`, { headers });
  }

  addComment(id: string, comment: string): Observable<Comment> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    const body = {
      uuid: id,
      text: comment,
    };
    return this.http.post<Comment>(`${this.apiUrlPosts}/${id}/add-comment`, body, {
      headers,
    });
  }

  authUser(
    username: string,
    password: string,
    expiresIn: number
  ): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrlUsers}/sign`, { username, password })
      .pipe(
        tap((response) => {
          const { id, firstName, lastName, username, role, avatar, jwtToken } =
            response;
          localStorage.setItem('id', id);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
          localStorage.setItem('username', username);
          localStorage.setItem('role', role);
          localStorage.setItem('avatar', avatar);
          localStorage.setItem('jwt', jwtToken);

          this.firstName = firstName;
          this.lastName = lastName;
          this.role = role;
          this.username = username;
          this.avatar = avatar;
          this.token = jwtToken;
          this.id = id;

          this.setTokenTimer(expiresIn);
        })
      );
  }

  registerUser(user: RegisterUser): Observable<RegisterUser> {
    return this.http.post<RegisterUser>(
      'https://evo-academy.wckz.dev/api/cooking-blog/users/registration',
      user
    );
  }

  getRandomObjects(arr: object[], count: number, result: object[], start: number) {
    const tempArray = [...arr];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(
        Math.random() * (tempArray.length - start) + start
      );
      const randomElement = tempArray[randomIndex];

      result.push(randomElement);
      tempArray.splice(randomIndex, 1);
    }
    return result;
  }

  logout() {
    this.token = null;
    localStorage.clear();
    localStorage.setItem('role', 'gost');
    this.role = 'gost';
    this.router.navigateByUrl('/');
  }

  setTokenTimer(expiresIn: number): void {
    const now = new Date().getTime();
    localStorage.setItem('timer', (now + expiresIn * 1000).toString());
  }

  getTimer() {
    const expiration = localStorage.getItem('timer');
    if (expiration) {
      const now = new Date().getTime();
      if (now > parseInt(expiration, 10)) {
        Notiflix.Notify.warning('Ваша сессия закончилась!');
        this.logout();
      }
    }
  }

  toggleLike(recipeId: string) {
    this.store.dispatch(new ToggleLike(recipeId));
    if (this.isLiked(recipeId)) {
      Notiflix.Notify.success('Добавлено в избранное');
    } else {
      Notiflix.Notify.failure('Убрана из избранного');
    }
  }

  isLiked(recipeId: string): boolean {
    let likedIds: string[] = [];
    this.likedRecipes$.subscribe((ids) => (likedIds = ids));
    return likedIds.includes(recipeId);
  }
}
