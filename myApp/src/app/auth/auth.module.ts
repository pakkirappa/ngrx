import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./components/register/register.component";
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
    imports: [CommonModule , ReactiveFormsModule ,HttpClientModule],
    declarations: [
        RegisterComponent 
    ],
})
export class AuthModule { }