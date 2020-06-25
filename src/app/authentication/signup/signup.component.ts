import { Component, OnInit } from '@angular/core';
import { 
  Validators, 
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUserForm: FormGroup;
  submitted = false;
  
  
  constructor(
    private formBuilder: FormBuilder
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
    this.submitted = true;
    if (signUpForm.invalid) {
      return;
    }
  }

}
