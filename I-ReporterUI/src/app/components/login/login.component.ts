import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private loginService: LoginService, private toastr: ToastrService, private route: ActivatedRoute, private router: Router) { }

  showSuccess() {
    this.toastr.success('Login Successful', 'Login');
  }

  showError() {
    this.toastr.error('Invalid Email or Password!', 'Login');
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.loginService.login(this.formGroup.value).subscribe(result => {
        if (result.success) {
          console.log(result);
          // alert(result.msg);
          this.showSuccess();
          this.router.navigate(["home"])
        } else {
          alert(result.msg);
        }
      },
        error => {
          console.log(error.error)
          // alert(error.error.msg);
          this.showError();
        }
      )
    }
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }
}
