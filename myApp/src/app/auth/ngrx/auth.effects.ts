import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP).pipe(
    map((action: AuthActions.TrySignup) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return fromPromise(
        firebase
          .auth()
          .createUserWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authSignin = this.actions$.ofType(AuthActions.TRY_SIGNIN).pipe(
    map((action: AuthActions.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: { username: string; password: string }) => {
      return fromPromise(
        firebase
          .auth()
          .createUserWithEmailAndPassword(authData.username, authData.password)
      );
    }),
    switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    }),
    mergeMap((token: string) => {
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );
  constructor(private actions$: Actions) {}
}