import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error-role',
  templateUrl: './error-role.component.html',
  styleUrls: ['./error-role.component.css']
})
export class ErrorRoleComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
    this.location.back();
  }
}
