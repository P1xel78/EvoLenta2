import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataPipe } from './data.pipe';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { DiteilComponent } from './recipes/diteil/diteil.component';
import { NgxsModule } from '@ngxs/store';
import { RecipeState } from 'src/store/recipe.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ErrorRoleComponent } from './error-role/error-role.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateReseptComponent } from './create-resept/create-resept.component';
import { ApiService } from './api.service';
import { AdminComponent } from './admin/admin.component';
import { AccessRoleAdminGuard } from './admin/access-role-admin.guard';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserComponent } from './admin/user/user.component';
import { DataTimePipe } from './data-time.pipe';
import { ReciptComponent } from './admin/recipt/recipt.component';
import { LoggingInterceptor } from './logging.interceptor';
import { AccessRoleRecipesGuard } from './create-resept/access-role-recipes.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DataPipe,
    AuthorizationComponent,
    RecipesComponent,
    DiteilComponent,
    FooterComponent,
    ErrorNotFoundComponent,
    HeaderComponent,
    ErrorRoleComponent,
    RegistrationComponent,
    CreateReseptComponent,
    AdminComponent,
    UserComponent,
    DataTimePipe,
    ReciptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CarouselModule.forRoot(),
    FormsModule,
    NgxsModule.forRoot([RecipeState]),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
  ],
  providers: [
    AccessRoleRecipesGuard,
    AccessRoleAdminGuard,
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
