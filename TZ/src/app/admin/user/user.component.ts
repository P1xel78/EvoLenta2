import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notify } from 'notiflix';
import { ApiService } from 'src/app/api.service';
import { Post, User } from 'src/app/interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(
    private service: ApiService,
    private activeRouter: ActivatedRoute
  ) {}
  
  user: User | null = null;
  posts: Post[] = [];

  isModalVisible: boolean = false;

  postLength!: number;
  commentLength!: number;
  
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((val) => {
      this.service.getUser(val['id']).subscribe({
        next: (res) => {
          this.user = res;
          this.posts = res.posts;
          this.postLength = res.posts.length;
          this.commentLength = res.comments.length;
        },
        error: () => {
          Notify.failure('Ошибка с сервера');
        },
      });
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
}
