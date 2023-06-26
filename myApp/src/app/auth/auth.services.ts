import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "./types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "../share/types/currentUesr.Interface";
import { HttpClient } from "@angular/common/http";
import { AuthResponseInterface } from "./types/auth.responseInterface";


@Injectable()
export class AuthService{
url='https://conduit.productionready.io/api/users'

    constructor(private http:HttpClient){

    }

    register(data:RegisterRequestInterface):Observable<CurrentUserInterface>{
        return this.http.post<AuthResponseInterface>(this.url , data).pipe(map((response:AuthResponseInterface)=>{
            return response.user;
        }))
    }
}