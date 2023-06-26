import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { registerAction, registerSuccessAction } from './actions';
import { switchMap } from 'rxjs';
import { AuthService } from '../auth/auth.services';
import { CurrentUserInterface } from '../share/types/currentUesr.Interface';

@Injectable()
export class RegisterEffect {
  constructor(private actions$:Actions  , private service:AuthService) {}

  register$=createEffect(()=>this.actions$.pipe(
    ofType(registerAction),
    switchMap({request})=>{
        return this.service.register(request).pipe(
            map((currentUser:CurrentUserInterface)=>{
                return registerSuccessAction({currentUser})
            })
        )
    }
))

  
}
