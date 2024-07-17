import { Component, ViewChild } from '@angular/core';

interface Books {
  name: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Реестер книг';

  @ViewChild('fileInput1') fileInput1: any;
  @ViewChild('fileInput2') fileInput2: any;
  books: Books[] = [];

  create_book = {
    name: null,
    author: null,
  };

  createBook() {
    this.books.push({
      name: this.create_book.name,
      author: this.create_book.author,
    });
    this.fileInput1.nativeElement.value = null;
    this.fileInput2.nativeElement.value = null;
  }
}
