import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notify } from 'notiflix';
import { ApiService } from 'src/app/api.service';

import { Location } from '@angular/common';
import { Post } from 'src/app/interface/posts';

@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.css'],
})
export class ReciptComponent {
  constructor(
    private service: ApiService,
    private activeRouter: ActivatedRoute,
    private location: Location
  ) {}
  post!: Post ;

  tags!: string[];
  idPost: string = '';
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((val) => {
      this.idPost = val['id'];
      this.service.getPost(val['id']).subscribe({
        next: (res) => {
          this.post = res;
          this.tags = res.tags;
        },
        error: () => {
          Notify.failure('Ошибка с сервера');
        },
      });
    });
    this.addActionEntry();
    this.addIngredient();
  }

  addActionEntry() {
    this.post.cookingSteps.push({ title: '', description: '' });
  }

  addIngredient() {
    this.post.ingredients.push({ title: '', description: '' });
  }

  addWord() {
    if (this.tags.map(str => str.trim())) {
      this.post.tags.push(...this.tags.map(str => str.trim()));
      this.tags = [];
    }
  }

  submitForm() {
    this.service.updatePost(this.idPost, this.post).subscribe({
      next: () => {
        Notify.success('Успешно редактировано');

      },
      error: () => {
        Notify.failure('Ошибка с сервера');
      },
    });
    this.location.back();
  }
}
