import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-resolve-route',
  templateUrl: './resolve-route.component.html',
  styleUrl: './resolve-route.component.css',
})
export class ResolveRouteComponent {
  Info: any = [];
  constructor(private actRout: ActivatedRoute) {}
  ngOnInit() {
    this.actRout.data.subscribe((data) => {
      console.log(data);
      this.Info = data[0];
    });
  }
}
