import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user=null;
  user_id=null;
  profile_id=null;
  
  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }
 
  ngOnInit() {
    this.finduser(this.route.snapshot.paramMap.get('email'))
  }
  finduser(email){
    this.loginService.getuser(email)
      .subscribe(
        data => {
          this.user=data
          console.log(data)
          
        },
        error => {
          console.log(error)
        }
      )
  }
  
}