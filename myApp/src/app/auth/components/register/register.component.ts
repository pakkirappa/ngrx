import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from 'src/app/store/actions';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private store: Store
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    // console.log(this.form.value , "form value");
    // this.http.post('https://api.angular-email.com/auth/signup' , this.form.value).subscribe((res)=>{
    //     console.log(res , "res");
    // })

    this.store.dispatch(registerAction(this.form.value));
  }
}
