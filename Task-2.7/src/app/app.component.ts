import { Component } from '@angular/core';
import { DataRoleService } from './data-role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public service: DataRoleService) {}
  title = 'HW7ChapterTwo';
  updateUser() {
    if (this.service.role === 'Пользователь')
      this.service.role = 'Администратор';
    else this.service.role = 'Пользователь';
  }
}
