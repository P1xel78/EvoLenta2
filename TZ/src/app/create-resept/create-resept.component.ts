import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Notify } from 'notiflix';
import { PostCreate } from '../interface/posts';

@Component({
  selector: 'app-create-resept',
  templateUrl: './create-resept.component.html',
  styleUrls: ['./create-resept.component.css'],
})
export class CreateReseptComponent {
  constructor(private service: ApiService) {}

  resept: PostCreate = {
    body: '',
    title: '',
    tags: [''],
    image: '',
    timeCooking: 0,
    foodValue: {
      calories: 0,
      fats: 0,
      carbohydrates: 0,
      proteins: 0,
    },
    cookingSteps: [
      {
        title: '',
        description: '',
      },
    ],
    ingredients: [
      {
        title: '',
        description: '',
      },
    ],
  };

  tags: string = '';

  addActionEntry() {
    this.resept.cookingSteps.push({ title: '', description: '' });
  }

  addIngredient() {
    this.resept.ingredients.push({ title: '', description: '' });
  }

  addWord() {
    if (this.tags.trim()) {
      this.resept.tags.push(this.tags.trim());
      this.tags = '';
    }
  }

  submitForm() {
    this.service.createPost(this.resept).subscribe({
      next: () => {
        Notify.success('Успешно добавлен');
        this.resept = {
          body: '',
          title: '',
          tags: [''],
          image: '',
          timeCooking: 0,
          foodValue: {
            calories: 0,
            fats: 0,
            carbohydrates: 0,
            proteins: 0,
          },
          cookingSteps: [
            {
              title: '',
              description: '',
            },
          ],
          ingredients: [
            {
              title: '',
              description: '',
            },
          ],
        };
        this.addActionEntry();
        this.addIngredient();
      },
      error: (error) => {
        Notify.failure('Ошибка с сервера');
      },
    });
  }
}
