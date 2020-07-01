import { Component, OnInit } from '@angular/core';
import { FlagapiService } from 'src/app/services/flagapi.service';

@Component({
  selector: 'app-flagslist',
  templateUrl: './flagslist.component.html',
  styleUrls: ['./flagslist.component.css']
})
export class FlagslistComponent implements OnInit {

  flags:any;
  
  constructor(private flagapiservice:FlagapiService) { }

  ngOnInit(): void { this.retrieveFlags();
  }
  retrieveFlags() {
      this.flagapiservice.getAll()
        .subscribe(
          data => {
            this.flags = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
}
