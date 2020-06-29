import { Component, OnInit } from '@angular/core';
import { ProfileService} from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  imageUrl :string ='/assets/user-512.png'
  
  
  profile_picture:File;
  bio:'';
  contacts:'';
  displayname:'';
  


  submitted = false;
  onImageChanged(event:any){
    this.profile_picture=event.target.files[0]
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
  handleFileInput(file : FileList){
    this.profile_picture=file.item(0);
    var reader = new FileReader();
    reader.onload=(event:any) => {
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.profile_picture);
    
  }

  saveProfile(){
    const upload=new FormData();
     upload.append('profile_picture',this.profile_picture,this.profile_picture.name);
     upload.append('bio',this.bio);
     upload.append('contacts',this.contacts);
     upload.append('displayname',this.displayname);
    
    this.profileService.create(upload).subscribe(response => {
      console.log(response);
      this.submitted = true;
      },
    error => {
      console.log(error)
    })
  }
}
