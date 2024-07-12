import { CanActivateFn, Router } from '@angular/router';
import { DataRoleService } from './data-role.service';
import { inject } from '@angular/core';

export const accessRoleGuard: CanActivateFn = (route, state) => {
  const authService = inject(DataRoleService);
  const router = inject(Router);
  if (authService.role === 'Администратор') {
    return true;
  } else {
    return router.navigateByUrl('/error');
  }
};
