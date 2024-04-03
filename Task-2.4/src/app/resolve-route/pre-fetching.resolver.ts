import { DataService } from '../data.service';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const preFetchingResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dataService: DataService = inject(DataService)
): Observable<{}> => {
  return dataService.getResolve();
};
