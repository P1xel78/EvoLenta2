import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupOneComponent } from './group-one/group-one.component';
import { GroupTwoComponent } from './group-two/group-two.component';
import { GroupThreeComponent } from './group-three/group-three.component';
import { GroupFourComponent } from './group-four/group-four.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupOneComponent,
    GroupTwoComponent,
    GroupThreeComponent,
    GroupFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
