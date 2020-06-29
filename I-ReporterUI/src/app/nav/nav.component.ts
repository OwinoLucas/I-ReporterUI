import { Component, OnInit } from '@angular/core';
import { InterventionRecordService} from 'src/app/services/interventionrecord.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private interventionrecordservice:InterventionRecordService,
    private router:Router
    ) { }
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
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
  }

}
