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
    this.user_id=localStorage.getItem('id')
    
  }
  
}