import { Component, OnInit } from '@angular/core';
import {InterventionrecordService } from 'src/app/services/interventionrecord.service'
import { } from '@angular/core'
@Component({
  selector: 'app-add-intervention-record',
  templateUrl: './add-intervention-record.component.html',
  styleUrls: ['./add-intervention-record.component.css']
})
export class AddInterventionRecordComponent implements OnInit {

  title:'';
  description:'';
  status:"rejected";
  image:File;
  videos:File;
  onIMageChanged(event:any){
    this.image=event.target.files[0];
  }
  onVideoChanged(event:any){
    this.videos=event.target.files[0];
  }
  submitted=false;

  constructor(private interventionrecordService:InterventionrecordService) { }

  ngOnInit(): void {
  }

  saveInterventionRecord(){
    // const data={
    //   title: this.interventionrecord.title,
    //   description: this.interventionrecord.description,
    //   status: this.interventionrecord.status,
    //   image:this.image.name
    //   // video:this.interventionrecord.video,
    // };
    const uploadData=new FormData()
    uploadData.append('title',this.title);
    uploadData.append('description',this.description);
    // uploadData.append('status',this.status)
    uploadData.append('image',this.image,this.image.name)
    uploadData.append('videos',this.videos,this.videos.name)
    this.interventionrecordService.create(uploadData)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });

  }
//   newIntervention(){
//     this.submitted=false;
//     this.interventionrecord={
//     title:'',
//     description:'',
//     status:'Under Investigation',
    
    
//     };
//     image:File;
//     this.video:File;
//   }
}
