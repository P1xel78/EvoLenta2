import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent {
  id: string = '';
  username: string = '';
  password: string = '';

  isQuickSession: boolean = false;

  constructor(private authService: ApiService, private router: Router) {}

  onCheckboxChange() {
    this.isQuickSession = true;
  }

  onSubmit() {
    const expiresIn = this.isQuickSession ? 120 : 3600;
    this.authService.authUser(this.username, this.password, expiresIn).subscribe({
      next: (res) => {
        this.authService.role = res.role; 
        this.id = res.id;  
        this.router.navigateByUrl('/');  
      },
      error: () => {
        Notiflix.Notify.warning('Неправильный логин или пароль. Повторите попытку...');
      },
    });
  }

}
