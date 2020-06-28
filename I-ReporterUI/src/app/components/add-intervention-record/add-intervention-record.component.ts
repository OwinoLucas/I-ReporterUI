import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {InterventionRecordService } from 'src/app/services/interventionrecord.service'
import { } from '@angular/core'
import { DecimalPipe } from '@angular/common';

declare let L;
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
  latitude: -1.045620;
  longitude: 37.075142 ;
  onIMageChanged(event:any){
    this.image=event.target.files[0];
  }
  onVideoChanged(event:any){
    this.videos=event.target.files[0];
  }
  locationmark=false;
  onChoseLocation(event){
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.locationmark=true;
    
    console.log (this.longitude,this.longitude)
  }
  
  submitted=false;

  constructor(private interventionrecordService:InterventionRecordService) { }

  ngOnInit(): void {

  }

  saveInterventionRecord(){
   
    const uploadData=new FormData()
    if (this.title){
      uploadData.append('title',this.title);
    }
    if(this.description){
      uploadData.append('description',this.description);
    }
    if(this.image){
      uploadData.append('image',this.image,this.image.name)
    }
    // uploadData.append('status',this.status)
    if(this.videos){
      uploadData.append('videos',this.videos,this.videos.name)
    }
    if(this.latitude & this.longitude){
      uploadData.append('latitude',this.latitude.toString())
      uploadData.append('longitude',this.longitude.toString())
    }
    console.log(uploadData.getAll)
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
