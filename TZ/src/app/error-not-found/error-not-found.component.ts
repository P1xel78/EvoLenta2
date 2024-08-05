import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-not-found',
  templateUrl: './error-not-found.component.html',
  styleUrls: ['./error-not-found.component.css']
})
export class ErrorNotFoundComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
