import { Component } from '@angular/core';
import { DataRoleService } from '../data-role.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(private activeRoute: ActivatedRoute) {}

  state = false;
  title = this.activeRoute.snapshot.queryParams['title'];
  body = this.activeRoute.snapshot.queryParams['body'];
  id = this.activeRoute.snapshot.params['id'];

  openForm() {
    this.state = true;
  }
}
