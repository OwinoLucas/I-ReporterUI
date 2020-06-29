import { Component, OnInit } from '@angular/core';
import { InterventionRecordService} from 'src/app/services/interventionrecord.service';
import {ActivatedRoute,Route, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-intervention-record-details',
  templateUrl: './intervention-record-details.component.html',
  styleUrls: ['./intervention-record-details.component.css']
})
export class InterventionRecordDetailsComponent implements OnInit {
  intervention_record=null;
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
      this.interventionrecordservice.putrecord(this.intervention_record.id,this.intervention_record)
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
