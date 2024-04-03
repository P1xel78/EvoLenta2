import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveRouteComponent } from './resolve-route/resolve-route.component';
import { preFetchingResolver } from './resolve-route/pre-fetching.resolver';

const routes: Routes = [
  {
    path: 'resolve',
    component: ResolveRouteComponent,
    resolve: [preFetchingResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
