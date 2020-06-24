import { Component, OnInit } from '@angular/core';
import { 
  Validators, 
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUserForm: FormGroup;
  
  
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
          userName: ['', [
                            Validators.required, 
                            Validators.maxLength(32),
                            Validators.nullValidator,
                        ]
                    ],
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
                                  Validators.nullValidator,
                                  Validators.minLength(8),
                                ]],
      })
      this.newUserForm.valueChanges.subscribe(console.log)
  }

}
