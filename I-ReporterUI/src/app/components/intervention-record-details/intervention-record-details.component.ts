import { Component, OnInit } from '@angular/core';
import { InterventionRecordService} from 'src/app/services/interventionrecord.service';
import {ActivatedRoute,Route, Router} from '@angular/router';

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
    private router:Router
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
      var r=confirm('Are you sure to dlete?');
      if (r ==true){
        this.deleteIntervention()
      }
      else{
        alert('nothing done')
      }
    }
    deleteIntervention(){
      this.interventionrecordservice.delete(this.intervention_record.id)
      .subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['intervention-record/all']);
        },
        error=>{
          console.log(error)
        });
    }

}