import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';


declare var $: any;


@Component({
  selector: 'app-currentprofile',
  templateUrl: './currentprofile.component.html',
  styleUrls: ['./currentprofile.component.css']
})
export class CurrentprofileComponent implements OnInit {

  currentProfile = null;
  message = "";
  imageUrl: string = '/assets/prof.png'
  profile_picture: File;
  bio: '';
  contacts: '';
  username: '';
  user: any;
  redflag: string = '/assets/download.png'
  intervention = '/assets/images.jpeg'
  back: string = '/assets/download(1).jpeg'
  show = false


  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getProfile(this.route.snapshot.paramMap.get('user'));

  }
  handleFileInput(file: FileList) {
    this.profile_picture = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.profile_picture);

  }

  getProfile(user) {
    this.profileService.get(user).subscribe(data => {
      this.currentProfile = data;
      console.log(data);
    },
      error => {
        console.log(error);
      })
  }

  updateProfile() {
    const user = localStorage.getItem('id')
    const upload = new FormData();
    upload.append('profile_picture', this.profile_picture, this.profile_picture.name);
    upload.append('bio', this.bio);
    upload.append('contacts', this.contacts);
    upload.append('username', this.username);

    this.profileService.update(user, upload).subscribe(
      response => {
        console.log(response);
        this.show = false
        this.router.navigate([`profile/${user}`])
      },
      error => {
        console.log(error);
      });

  }
  showForm() {
    this.show = true
  }
  hideForm() {
    this.show = false
  }
}
