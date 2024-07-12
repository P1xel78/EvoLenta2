import { Component } from '@angular/core';
import { DataRoleService } from '../data-role.service';
import { PostComponent } from '../post/post.component';
import { EditComponent } from '../post/edit/edit.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private dataService: DataRoleService) {}

  title = '';
  body = '';
  posts: any;
  post: any;
  ngOnInit() {
    this.dataService.getPost().subscribe({
      next: (response: any) => {
        this.posts = response;
      },
    });
    this.post = this.posts;
  }
}
