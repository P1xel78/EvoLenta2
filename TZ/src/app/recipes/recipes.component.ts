import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Posts } from '../interface/posts';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  resepts: Posts[] = [];
  @Select(
    (state: { recipes: { likedRecipes: string } }) => state.recipes.likedRecipes
  )
  likedRecipes$!: Observable<string[]>;
  constructor(
    public apiService: ApiService,
    private meta: Meta,
  ) {
    this.meta.addTags([
      { name: 'og:title', content: 'Foodie: Каталог рецептов' },
      {
        name: 'og:description',
        content: 'Все самые лучшие рецепты собраны здесь',
      },
    ]);
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe({
      next: (res) => {
        this.resepts = res;
      },
    });
  }
}
