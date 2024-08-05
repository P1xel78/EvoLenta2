import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DiteilComponent } from './recipes/diteil/diteil.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateReseptComponent } from './create-resept/create-resept.component';
import { ErrorRoleComponent } from './error-role/error-role.component';
import { AdminComponent } from './admin/admin.component';
import { AccessRoleRecipesGuard } from './create-resept/access-role-recipes.guard';
import { AccessRoleAdminGuard } from './admin/access-role-admin.guard';
import { UserComponent } from './admin/user/user.component';
import { ReciptComponent } from './admin/recipt/recipt.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Главная страница',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    title: 'Каталог рецептов',
  },
  {
    path: 'recipes/:id',
    component: DiteilComponent,
    title: 'Рецепт',
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
    title: 'Авторизация',
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Регистрация',
  },
  {
    path: 'create-recipe',
    component: CreateReseptComponent,
    title: 'Создание рецепта',
    canActivate: [AccessRoleRecipesGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Администрирование',
    canActivate: [AccessRoleAdminGuard],
  },
  {
    path: 'admin/users/:id',
    component: UserComponent,
    title: 'Страница пользователя',
    canActivate: [AccessRoleAdminGuard],
  },
  {
    path: 'admin/resipes/:id',
    component: ReciptComponent,
    title: 'Редактирование рецепта',
    canActivate: [AccessRoleAdminGuard],
  },
  {
    path: 'error',
    component: ErrorRoleComponent,
    title: 'Ошибка 401',
  },
  {
    path: '**',
    component: ErrorNotFoundComponent,
    title: 'Ошибка 404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
