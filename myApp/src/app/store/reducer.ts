import { createReducer, on,Action } from "@ngrx/store";
import { AuthStateInterface } from "../auth/types/authState.interface";
import { registerAction } from "./actions";


const intialState:AuthStateInterface={
    isSubmitting:false
}

 const authReducer=createReducer(intialState,on(registerAction,(state : AuthStateInterface)=>({
    ...state,
    isSubmitting:true
})))



export function reducers(state:AuthStateInterface,action:Action){
    return authReducer(state,action);
}