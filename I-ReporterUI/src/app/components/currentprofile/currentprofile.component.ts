import { Component, OnInit } from '@angular/core';
import { ProfileService} from 'src/app/services/profile.service';


@Component({
  selector: 'app-currentprofile',
  templateUrl: './currentprofile.component.html',
  styleUrls: ['./currentprofile.component.css']
})
export class CurrentprofileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
