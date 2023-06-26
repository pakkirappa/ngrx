import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from 'src/app/store/actions';
import { isSubmittingSelector } from 'src/app/store/selectors';
import { AuthService } from '../../auth.services';

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

  isSumitting$:Observable<boolean> | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private service:AuthService
  ) {}
  ngOnInit(): void {
    this.intializedValues();
  }

  intializedValues(): void {
    this.isSumitting$=this.store.pipe(select(isSubmittingSelector))

    console.log(this.isSumitting$ , isSubmittingSelector);
  }

  onSubmit(): void {
    // console.log(this.form.value , "form value");
    // this.http.post('https://api.angular-email.com/auth/signup' , this.form.value).subscribe((res)=>{
    //     console.log(res , "res");
    // })

    this.store.dispatch(registerAction(this.form.value));

    this.service.register(this.form.value).subscribe({
      next: (res) => {
        console.log(res, 'res');
      }
    })
  }
}
