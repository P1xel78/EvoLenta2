import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { GroupOneComponent } from './group-one/group-one.component';
import { GroupTwoComponent } from './group-two/group-two.component';
import { GroupThreeComponent } from './group-three/group-three.component';
import { GroupFourComponent } from './group-four/group-four.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HW6ChapterTwo';
  view = false;
  @ViewChild('dynamicComp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef1!: ComponentRef<GroupOneComponent>;
  private componentRef2!: ComponentRef<GroupTwoComponent>;
  private componentRef3!: ComponentRef<GroupThreeComponent>;
  private componentRef4!: ComponentRef<GroupFourComponent>;
  addTemplate1() {
    this.viewRef.clear();
    this.componentRef1 = this.viewRef.createComponent(GroupOneComponent);
    this.view = true;
  }

  addTemplate2() {
    this.viewRef.clear();
    this.componentRef2 = this.viewRef.createComponent(GroupTwoComponent);
    this.view = true;
  }

  addTemplate3() {
    this.viewRef.clear();
    this.componentRef3 = this.viewRef.createComponent(GroupThreeComponent);
    this.view = true;
  }

  addTemplate4() {
    this.viewRef.clear();
    this.componentRef4 = this.viewRef.createComponent(GroupFourComponent);
    this.view = true;
  }
  deleteTemplate() {
    this.viewRef.clear();
    this.view = false;
  }
}
