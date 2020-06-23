import { Component, OnInit } from '@angular/core';
import { ProfileService} from 'src/app/services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {
    profile_picture:'',
    bio:'',
    contacts:''
  };
  submitted = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
  saveProfile(){
    const data={
      profile_picture: this.profile.profile_picture,
      bio: this.profile.bio,
      contacts: this.profile.contacts
    };
    
    this.profileService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
      },
    error => {
      console.log(error)
    })
  }
  
  newProfile(){
    this.submitted=false;
    this.profile={
      profile_picture:'',
      bio:'',
      contacts:''
    };
  }
}
