import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InterventionRecordService} from 'src/app/services/interventionrecord.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user=null;
  user_id=null;
  profile_id=null;
  
  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router, 
              private interventionrecordservice:InterventionRecordService) { }
  
  title:''
  interventionrecords:any;
  searchinterventionrecord(){
    this.interventionrecordservice.getbytitle(this.title)
    .subscribe(
      data=>{  
        this.router.navigate([`search-list/${this.title}`]);
        this.interventionrecords=data
        const datasearch=data
        console.log(data)
      },
      error=>{
        this.router.navigate(['**'])
        console.log(error.error)
      }
    )
  }
 
  ngOnInit() {
    this.user_id=localStorage.getItem('id')
  }
  
}