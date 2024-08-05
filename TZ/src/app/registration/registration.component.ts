import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Notify } from 'notiflix';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  login!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  middleName: string = 'Не указано';

  constructor(private server: ApiService, private router: Router) {}

  onRegister() {
    const user = {
      username: this.login,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
    };

    this.server.registerUser(user).subscribe({
      next: () => {
        Notify.success('Вы успешно зарегистрировались!');
        this.router.navigateByUrl('/');
      },
    });
  }
}
