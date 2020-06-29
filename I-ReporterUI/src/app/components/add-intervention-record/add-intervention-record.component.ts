import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {InterventionRecordService } from 'src/app/services/interventionrecord.service'
import { } from '@angular/core'
import { DecimalPipe } from '@angular/common';
import { NONE_TYPE } from '@angular/compiler';
import{ActivatedRoute,Router }from '@angular/router'

@Component({
  selector: 'app-add-intervention-record',
  templateUrl: './add-intervention-record.component.html',
  styleUrls: ['./add-intervention-record.component.css']
})
export class AddInterventionRecordComponent implements OnInit {
  
  
  title:'';
  description:'';

  image:File;
  videos:File;
  latitude:any ;
  longitude:any ;

  status=null;
  
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

  constructor(
    private interventionrecordService:InterventionRecordService,
    private router:Router,
    ) { 
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition(pos =>{
        this.longitude= +pos.coords.longitude;
        this.latitude = +pos.coords.latitude
      });
    }}

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
        this.router.navigate(['/intervention-record/all'])
        this.submitted = true;

      },
      error => {
        console.log(error.error);
      });

  }

}
