import { Component, OnInit } from '@angular/core';
import { FlagapiService } from 'src/app/services/flagapi.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  title: '';
  description: '';
  image: File;
  videos: File;
  latitude: any;
  longitude: any;



  onIMageChanged(event: any) {
    this.image = event.target.files[0];
  }
  onVideoChanged(event: any) {
    this.videos = event.target.files[0];
  }

  locationmark = false;
  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationmark = true;

    console.log(this.longitude, this.longitude)
  }

  submitted = false;

  constructor(
    private flagapiService: FlagapiService,
    private router: Router,
  ) {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.longitude = +pos.coords.longitude;
        this.latitude = +pos.coords.latitude
      });
    }
  }

  ngOnInit(): void {

  }

  saveFlag() {

    const uploadData = new FormData()
    if (this.title) {
      uploadData.append('title', this.title);
    }
    if (this.description) {
      uploadData.append('description', this.description);
    }

    if (this.image) {
      uploadData.append('image', this.image, this.image.name)
    }
    // uploadData.append('status',this.status)
    if (this.videos) {
      uploadData.append('videos', this.videos, this.videos.name)
    }

    if (this.latitude & this.longitude) {
      uploadData.append('latitude', this.latitude.toString())
      uploadData.append('longitude', this.longitude.toString())
    }
    console.log(uploadData.getAll)
    this.flagapiService.create(uploadData)

      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/flags/all'])
          this.submitted = true;

        },
        error => {
          console.log(error);
        });

  }

}
