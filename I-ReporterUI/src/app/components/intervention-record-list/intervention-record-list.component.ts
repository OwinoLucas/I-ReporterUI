import { Component, OnInit } from '@angular/core';
import {InterventionRecordService} from 'src/app/services/interventionrecord.service';
@Component({
  selector: 'app-intervention-record-list',
  templateUrl: './intervention-record-list.component.html',
  styleUrls: ['./intervention-record-list.component.css']
})
export class InterventionRecordListComponent implements OnInit {


  interventionrecords:any;

  constructor(private interventionrecordservice:InterventionRecordService) { }

  ngOnInit(): void {
    this.getInterventionRecords();
  }
  getInterventionRecords(){
    this.interventionrecordservice.getAll()
    .subscribe(
      data =>{
        this.interventionrecords=data;
        console.log(data);
      } ,
      error =>{
        console.log(error.error)
      });
  }
}
