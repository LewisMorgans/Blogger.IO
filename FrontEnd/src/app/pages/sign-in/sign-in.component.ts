import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public pageInValidState = true;

    constructor() {}

    ngOnInit() {
      this.signInForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      });
    }

    public logIn(): void {
     this.signInForm.valid ? this.pageInValidState = true : this.pageInValidState = false;
      // call login service here.
    }

}
