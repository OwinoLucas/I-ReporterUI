import { Component, OnInit } from '@angular/core';
import { InterventionRecordService} from 'src/app/services/interventionrecord.service';
import {ActivatedRoute,Route, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-intervention-record-details',
  templateUrl: './intervention-record-details.component.html',
  styleUrls: ['./intervention-record-details.component.css']
})
export class InterventionRecordDetailsComponent implements OnInit {
  intervention_record=null;
  edittitle:'';
  editdescription:'';
  editimage:File;
  editvideos:File;
  editlatitude:'';
  editlongitude:'';
  submitted=false;
  constructor(
    private interventionrecordservice:InterventionRecordService,
    private route:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.getIntervention(this.route.snapshot.paramMap.get('id'));
  }
    getIntervention(id){
      this.interventionrecordservice.get(id)
      .subscribe(
        data=>{
          this.intervention_record=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        });
    }
    confirmdelete(event){
      var r=confirm('Are you sure to delete?');
      if (r ==true){
        this.deleteIntervention()
        this.toastr.success('Deleted successfully!','Deleted successfully!')
      }
      else{
        alert('nothing done')
      }
    }
    
    updaterecord(){
      const uploadData=new FormData()
      if (this.edittitle){
        uploadData.append('title',this.edittitle);
      }
      if(this.editdescription){
        uploadData.append('description',this.editdescription);
      }
      if(this.editimage){
        uploadData.append('image',this.editimage,this.editimage.name)
      }
      // uploadData.append('status',this.status)
      if(this.editvideos){
        uploadData.append('videos',this.editvideos,this.editvideos.name)
      }
      console.log(uploadData)
      // const data= new FormData()
      // const edittitle=this.intervention_record.title
      // const editdescription=this.intervention_record.description
      // const editstatus=this.intervention_record.status;
      // const editimage:File=this.intervention_record.image;
    
      // const editvideos:File=this.intervention_record.videos;
      // const editlatitude=this.intervention_record.latitude;
      // const editlongitude=

  // longitude: 37.075142 ;
      this.interventionrecordservice.putrecord(this.intervention_record.id,uploadData)
      .subscribe(
        data=>{
          console.log(data)
          alert('Editted succesfully!')
        },
        error=>{
          console.log(error.error)
        }
      )
    }
    deleteIntervention(){
      this.interventionrecordservice.delete(this.intervention_record.id)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/intervention-record/all']);
        },
        error=>{
          console.log(error)
        });
    }

}
