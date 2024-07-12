import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { EditComponent } from './post/edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { accessRoleGuard } from './access-role.guard';

const routes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivateChild: [accessRoleGuard],
    children: [
      {
        path: 'edit',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
