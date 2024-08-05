import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTimer();
  }

  logout() {
    this.apiService.logout();
  }
}
