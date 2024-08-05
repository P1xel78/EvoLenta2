import { Component } from '@angular/core';
import { Notify } from 'notiflix';
import { ApiService } from '../api.service';
import { User, Users } from '../interface/user';
import { Posts } from '../interface/posts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private service: ApiService) {}

  users: Users[] = [];
  posts: Posts[] = [];

  isModalVisible: boolean = false;

  ngOnInit() {
    this.service.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: () => {
        Notify.failure('Ошибка с сервера');
      },
    });

    this.service.getPosts().subscribe({
      next: (res) => {
        this.posts = res;
      },
      error: () => {
        Notify.failure('Ошибка с сервера');
      },
    });
  }

  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  deleteUser(id: string) {
    this.service.deleteUser(id).subscribe({
      next: () => {
        this.closeModal();
        Notify.success('Успешное удаление');
      },
      error: () => {
        Notify.failure('Ошибка с сервера');
      },
    });
  }

  deletePost(id: string) {
    this.service.deletePost(id).subscribe({
      next: () => {
        this.closeModal();
        Notify.success('Успешное удаление');
      },
      error: () => {
        Notify.failure('Ошибка с сервера');
      },
    });
  }
}
