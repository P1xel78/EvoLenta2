import { Component } from '@angular/core';
import { PostComponent } from '../post.component';
import { MainComponent } from '../../main/main.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(private postComp: PostComponent) {}
  title = '';
  body = '';

  create_person = {
    title: null,
    body: null,
  };

  updatePost() {
    this.postComp.title = this.create_person.title;
    this.postComp.body = this.create_person.body;
    this.title = this.postComp.title;
    this.body = this.postComp.body;
    this.postComp.state = false;
  }
}
