import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { reducers } from "../store/reducer";
import { AuthService } from "./auth.services";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../enviroment";



@NgModule({
    imports: [CommonModule , ReactiveFormsModule ,HttpClientModule , StoreModule.forFeature('auth',reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
    declarations: [
        RegisterComponent 
    ],
    providers: [AuthService],
})
export class AuthModule { }