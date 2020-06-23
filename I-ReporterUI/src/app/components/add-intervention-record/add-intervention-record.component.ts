import { Component, OnInit } from '@angular/core';
import {InterventionrecordService } from 'src/app/services/interventionrecord.service'
import { } from '@angular/core'
@Component({
  selector: 'app-add-intervention-record',
  templateUrl: './add-intervention-record.component.html',
  styleUrls: ['./add-intervention-record.component.css']
})
export class AddInterventionRecordComponent implements OnInit {
  interventionrecord={
    title:'',
    description:'',
    status:'Under Investigation',
    latitude:'',
    longitude:'',
    image:'',
    videos:''
  };
  submitted=false;
  constructor(private interventionrecordService:InterventionrecordService) { }

  ngOnInit(): void {
  }

  saveInterventionRecord(){
    const data={
      title: this.interventionrecord.title,
      description: this.interventionrecord.description,
      status: this.interventionrecord.status,
      latitude:this.interventionrecord.latitude,
      longitude: this.interventionrecord.longitude,
      image: this.interventionrecord.image,
      videos: this.interventionrecord.videos,
    };

    this.interventionrecordService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });

  }
  newIntervention(){
    this.submitted=false;
    this.interventionrecord={
    title:'',
    description:'',
    status:'Under Investigation',
    latitude:'',
    longitude:'',
    image:'',
    videos:''
    };
  }
}
