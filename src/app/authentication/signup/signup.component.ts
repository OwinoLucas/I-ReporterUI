import { Component, OnInit, ɵConsole } from '@angular/core';
import { 
  Validators, 
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUserForm: FormGroup;
  submitted = false;
  displayAccountSuccessfullyCreatedSection: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
   this.newUserForm = this.formBuilder.group({
          firstName: ['', [
                            Validators.required, 
                            Validators.maxLength(32),
                            Validators.nullValidator
                          ]
                    ],
          lastName: ['', Validators.maxLength(32)],
          email: ['', [Validators.required,
                      Validators.nullValidator,
                      Validators.email
                      ]
                  ],
          password: ['', [Validators.required,
                          Validators.nullValidator,
                          Validators.minLength(8),
                        ]],
          confirmPassword: ['', [ Validators.required,
                                  Validators.nullValidator
                                ]],
      })
      this.newUserForm.valueChanges.subscribe(console.log)
  }
  onSubmit(signUpForm: FormGroup){
    this.displayAccountSuccessfullyCreatedSection = false;
    this.submitted = true;
    if (signUpForm.invalid) {
      return;
    }
    let newUser = {
      confirm_password:this.newUserForm.controls['confirmPassword'].value,
      password:this.newUserForm.controls['password'].value,
      email:this.newUserForm.controls['email'].value,
      first_name:this.newUserForm.controls['firstName'].value
    }
    this.signupService.createNewUser( newUser ).subscribe(
      (data)=> {
        switch(data['status']){
          case 201:
            this.displayAccountSuccessfullyCreatedSection = true;
            break;
        }
      },
      (err)=> {},
    )
  }

}
