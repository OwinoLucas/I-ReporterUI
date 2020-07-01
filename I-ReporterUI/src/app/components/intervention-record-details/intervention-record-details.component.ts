import { Component, OnInit } from '@angular/core';
import { InterventionRecordService } from 'src/app/services/interventionrecord.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-intervention-record-details',
  templateUrl: './intervention-record-details.component.html',
  styleUrls: ['./intervention-record-details.component.css']
})
export class InterventionRecordDetailsComponent implements OnInit {
  intervention_record = null;
  edittitle: '';
  editdescription: '';
  editimage: File;
  editvideos: File;
  editlatitude: number;
  editlongitude: number;
  submitted = false;
  constructor(
    private interventionrecordservice: InterventionRecordService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getIntervention(this.route.snapshot.paramMap.get('id'));
    this.get_status(this.route.snapshot.paramMap.get('id'))
  }
  locationmark = true;;
  onChoseLocation(event) {
    this.editlatitude = event.coords.lat;
    this.editlongitude = event.coords.lng;
    this.locationmark = true;

    console.log(this.editlongitude, this.editlongitude)
  }
  getIntervention(id) {
    this.interventionrecordservice.get(id)
      .subscribe(
        data => {
          this.editlatitude = parseFloat(data['latitude'])
          this.editlongitude = parseFloat(data['longitude'])
          this.edittitle = data['title']
          console.log(this.editlongitude)
          this.intervention_record = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  nullstatus = true
  upstatus: ''
  status: any;
  investigation: any;
  resolved: any;
  rejected: any;
  stat: any;

  get_status(id) {
    this.interventionrecordservice.get(id)
      .subscribe(
        data => {
          this.status = data['status']

          console.log(status)
          if (status == 'waiting') {

          } if (this.status == "Under Investigation") {
            this.investigation = this.status
            this.nullstatus = false;
            console.log(this.investigation)
          } else if (this.status == "rejected") {
            this.rejected = this.status
            this.nullstatus = false;
          } else if (this.status == "resolved") {
            this.resolved = this.status
            this.nullstatus = false;
          } else if (this.status == "waiting") {
            this.stat = this.status
          }
        }
      )
  }



  confirmdelete(event) {
    var r = confirm('Are you sure to delete?');
    if (r == true) {
      this.deleteIntervention()
      this.toastr.success('Deleted successfully!', 'Deleted successfully!')
    }
    else {
      alert('nothing done');
    }
  }
  showSuccess() {
    this.toastr.success('Nothing deleted', 'Nothing deleted');
  }

  onIMageChanged(event: any) {
    this.editimage = event.target.files[0];
  }
  onVideoChanged(event: any) {
    this.editvideos = event.target.files[0];
  }

  updaterecord() {
    const uploadData = new FormData()
    if (this.edittitle) {
      uploadData.append('title', this.edittitle);
    }
    if (this.editdescription) {
      uploadData.append('description', this.editdescription);
    }
    if (this.editimage) {
      uploadData.append('image', this.editimage, this.editimage.name)
    }
    // uploadData.append('status',this.status)
    if (this.editvideos) {
      uploadData.append('videos', this.editvideos, this.editvideos.name)
    }
    if (this.editlatitude && this.editlongitude) {
      uploadData.append('latitude', this.editlatitude.toString())
      uploadData.append('longitude', this.editlongitude.toString())
    }
    console.log(uploadData)
    this.interventionrecordservice.putrecord(this.intervention_record.id, uploadData)
      .subscribe(
        data => {
          console.log(data)
          alert('Editted succesfully!')
          this.getIntervention(this.route.snapshot.paramMap.get('id'));

        },
        error => {
          console.log(error.error)
        }
      )
  }
  deleteIntervention() {
    this.interventionrecordservice.delete(this.intervention_record.id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/intervention-record/all']);
        },
        error => {
          console.log(error)
        });
  }

}
