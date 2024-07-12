import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { EditComponent } from './post/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { accessRoleGuard } from './access-role.guard';
@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    MainComponent,
    PostComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
