import { Component } from '@angular/core';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private responseServ: ResponseService) {}
  massObj = this.responseServ.testData;
  title = 'HW1ChapterTwo';
}
