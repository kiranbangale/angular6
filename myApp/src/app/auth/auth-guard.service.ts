import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../ngrx/app.reducers';
import * as fromAuth from './ngrx/auth.reducers';
import { map, switchMap, mergeMap, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store
      .select('auth')
      .take(1)
      .pipe(
        map((authState: fromAuth.State) => {
          return authState.authenticated;
        })
      );
  }
}
