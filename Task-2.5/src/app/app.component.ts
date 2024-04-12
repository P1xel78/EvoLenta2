import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private dataService: DataService) {}
  btm1 = 1;
  users: object[] = [];
  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response;
        console.log(this.users);
      },
    });
  }
}
