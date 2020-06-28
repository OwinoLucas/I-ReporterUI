import { Component, OnInit } from '@angular/core';
import { InterventionRecordService} from 'src/app/services/interventionrecord.service'
import { InterventionRecordListComponent } from '../components/intervention-record-list/intervention-record-list.component';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private interventionrecordservice:InterventionRecordService) { }
  title:''
  searchinterventionrecord(){
    this.interventionrecordservice.getbytitle(this.title)
    .subscribe(
      data=>{
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
