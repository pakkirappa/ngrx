import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";


export const registerAction= createAction(ActionTypes.REGISTER,props<{userName:string , password:string , email:string}>());

export const loginSuccess= createAction('[Login Page] Login Success',props<{user:any}>());

export const loginFailure= createAction('[Login Page] Login Failure',props<{error:any}>());