import { Component, OnInit } from '@angular/core';
import { ProfileService} from 'src/app/services/profile.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-currentprofile',
  templateUrl: './currentprofile.component.html',
  styleUrls: ['./currentprofile.component.css']
})
export class CurrentprofileComponent implements OnInit {

  currentProfile= null;
  message="";

  constructor(private profileService : ProfileService,
              private route : ActivatedRoute,
              private router : Router) { }


  ngOnInit() {
    this.getProfile(this.route.snapshot.paramMap.get('id'));
  }

  getProfile(id){
    this.profileService.get(id).subscribe(data => {
      this.currentProfile=data;
      console.log(data);
    },
    error => {
      console.log(error);
    })
  }

  updateProfile(){
    this.profileService.update(this.currentProfile.id,this.currentProfile).subscribe(
      response => {
        console.log(response);
        this.message = 'Your profile was updated successfully'
      },
      error => {
        console.log(error);
    });
  }
}
