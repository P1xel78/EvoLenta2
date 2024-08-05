import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Notify } from 'notiflix';
import { ApiService } from 'src/app/api.service';
import { Comments, Post, Posts } from 'src/app/interface/posts';


@Component({
  selector: 'app-diteil',
  templateUrl: './diteil.component.html',
  styleUrls: ['./diteil.component.css'],
})
export class DiteilComponent {
  id: string = '';
  role: string | null = '';
  textComment: string = '';

  isChecked: boolean = false;
  isModalVisible: boolean = false;
  checkedIngredients: boolean[] = [];
  checkedSteps: boolean[] = [];

  firstPost!: Post;
  threePost: Posts[] = [];
  fourPosts: Posts[] = [];
  comments: Comments[] = [];

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    public apiService: ApiService,
  ) {
    this.role = apiService.role;
    activeRouter.queryParams.subscribe((val) => {
      this.id = val['id'];
      this.threePost = [];
      this.fourPosts = [];
      this.apiService.getPosts().subscribe({
        next: (res) => {
          this.apiService.getRandomObjects(res, 3, this.threePost, 1);
          this.apiService.getRandomObjects(res, 4, this.fourPosts, 1);
        },
      });
      this.apiService.getPost(val['id']).subscribe({
        next: (res) => {
          this.firstPost = res;
          this.comments = res.comments;
          this.meta.addTag({ name: 'og:title', content: res.title });
          this.meta.addTag({ name: 'og:description', content: res.body });
          this.meta.addTag({ name: 'og:image', content: res.image });
          this.checkedIngredients = new Array(
            this.firstPost.ingredients.length
          ).fill(false);
          this.checkedSteps = new Array(
            this.firstPost.cookingSteps.length
          ).fill(false);
        },
      });
    });
  }

  addComents() {
    this.apiService.addComment(this.id, this.textComment).subscribe({
      next: () => {
        Notify.success('Комментарий добавлен');
        this.apiService.getPost(this.id).subscribe({
          next: (res) => {
            this.textComment = '';
            this.comments = res.comments;
          },
        });
      },
      error: (err) => {
        Notify.warning('Ошибка сервера');
      },
    });
  }

  stepCheck(index: number): void {
    this.checkedSteps[index] = !this.checkedSteps[index];
  }

  ingredientCheck(index: number): void {
    this.checkedIngredients[index] = !this.checkedIngredients[index];
  }

  changeId(newId: string) {
    this.router.navigate(['recipes/', newId]);
  }

  onPrint() {
    window.print();
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
