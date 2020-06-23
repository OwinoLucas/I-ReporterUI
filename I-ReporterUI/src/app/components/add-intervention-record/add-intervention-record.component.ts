import { Component, OnInit } from '@angular/core';
import {InterventionrecordService } from 'src/app/services/interventionrecord.service'

@Component({
  selector: 'app-add-intervention-record',
  templateUrl: './add-intervention-record.component.html',
  styleUrls: ['./add-intervention-record.component.css']
})
export class AddInterventionRecordComponent implements OnInit {
  interventionrecord={
    title='',
    description='',
    status='Under Investigation',
    latitude='',
    longitude='',
    image='',
    videos=''
  };
    submitted=false;
  constructor(private InterventionrecordService) { }

  ngOnInit(): void {
  }

}
