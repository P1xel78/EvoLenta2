import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Notify } from 'notiflix';
import { Meta } from '@angular/platform-browser';
import { Posts } from '../interface/posts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  firstPosts: Posts[] = [];
  bestPosts: Posts[] = [];
  fourPosts: Posts[] = [];
  sixPosts: Posts[] = [];

  canLoadMore: boolean = true;
  isVisible: boolean = true;

  email: string = '';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(
    public apiService: ApiService,
    private meta: Meta
  ) {
    this.meta.addTags([
      { name: 'og:title', content: 'Foodie: Главная' },
      {
        name: 'og:description',
        content: 'Сборник кулинарных рецептов, для всей семьи',
      },
    ]);
  }

  ngOnInit() {
    const hasSeenNotification = localStorage.getItem('hasSeenNotification');
    if (hasSeenNotification) {
      this.isVisible = false;
    }
    this.apiService.getPosts().subscribe({
      next: (res) => {
        this.apiService.getRandomObjects(res, 6, this.sixPosts, 0);
        this.apiService.getRandomObjects(res, 4, this.fourPosts, 0);
        this.bestPosts = this.sixPosts.slice(0, 3);
        this.firstPosts = res.slice(1, 4);
      },
    });
  }

  loadMoreRecipes() {
    this.bestPosts = this.sixPosts;
    this.canLoadMore = false;
  }

  emailGet() {
    Notify.info('Вы подписались на рассылку!');
  }

  closeNotification() {
    this.isVisible = false;
    localStorage.setItem('hasSeenNotification', 'true');
  }
}
