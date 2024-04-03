import { Component } from '@angular/core';
import { DataService } from './data.service';
import { response } from 'express';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  button1() {
    this.dataService.getButton1().subscribe({
      next: (response: any) => {
        console.log(response);
      },
    });
  }

  button2() {
    this.dataService.getButton2().subscribe({
      next: (response: any) => {
        console.log(response);
      },
    });
  }

  button3() {
    this.dataService.postButton3().subscribe({
      next: (response: any) => {
        console.log(response);
      },
    });
  }

  button4() {
    this.dataService.getButton4().subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          console.log('Ошибка 404!');
        }
      },
    });
  }

  button5() {
    this.dataService.getButton5().subscribe({
      next: (response: any) => {
        console.log(response);
      },
    });
  }

  button6() {
    this.dataService.deleteButton6().subscribe({
      next: (response: any) => {
        console.log(response);
      },
    });
  }
}
