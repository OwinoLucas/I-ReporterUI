import { Component, OnInit } from '@angular/core';
import { FlagapiService } from 'src/app/services/flagapi.service';
import {ActivatedRoute,Route, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-flagdetail',
  templateUrl: './flagdetail.component.html',
  styleUrls: ['./flagdetail.component.css']
})
export class FlagdetailComponent implements OnInit {
  flag_record=null;
  edittitle:'';
  editdescription:'';
  editimage:File;
  editvideos:File;
  editlatitude:number;
  editlongitude:number;
  submitted=false;
  constructor(
    private flagapiservice:FlagapiService,
    private route:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.getFlag(this.route.snapshot.paramMap.get('id'));
    //this.get_status(this.route.snapshot.paramMap.get('id'))
  }
  locationmark=true;;
  onChoseLocation(event){
    this.editlatitude=event.coords.lat;
    this.editlongitude=event.coords.lng;
    this.locationmark=true;

    console.log (this.editlongitude,this.editlongitude)
  }
    getFlag(id){
      this.flagapiservice.get(id)
      .subscribe(
        data=>{
          this.editlatitude=parseInt( data['latitude'])
          this.editlongitude=parseInt( data['longitude'])
          this.edittitle=data['title']
          console.log(this.editlongitude)
          this.flag_record=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        });
    }


    confirmdelete(event){
      var r=confirm('Are you sure you want  to delete?');
      if (r ==true){
        this.deleteFlag()
        this.toastr.success('Deleted successfully!','Deleted successfully!')
      }
      else{
        alert('not deleted');
      }
    }
    showSuccess() {
      this.toastr.success('Nothing deleted', 'Nothing deleted');
    }

    onIMageChanged(event:any){
      this.editimage=event.target.files[0];
    }
    onVideoChanged(event:any){
      this.editvideos=event.target.files[0];
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

      if(this.editlatitude && this.editlongitude){
        uploadData.append('latitude',this.editlatitude.toString())
        uploadData.append('longitude',this.editlongitude.toString())
      }
      console.log(uploadData)
      this.flagapiservice.putrecord(this.flag_record.id,uploadData)
      .subscribe(
        data=>{
          console.log(data)
          alert(' Flag Edited succesfully!')
        },
        error=>{
          console.log(error.error)
        }
      )
    }
    deleteFlag(){
      this.flagapiservice.delete(this.flag_record.id)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/flags/all']);
        },
        error=>{
          console.log(error)
        });
    }

}
