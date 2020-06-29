import { Component, OnInit ,Input,OnChanges} from '@angular/core';

import { InterventionRecordService} from 'src/app/services/interventionrecord.service'
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(public interventionrecordservice:InterventionRecordService) { }
  searchdata=this.interventionrecordservice.searchdata
  
  ngOnInit(): void {
    console.log(this.searchdata+"TESTEER")

  }
  ngOnChanges(){
    this.searchdata=this.interventionrecordservice.searchdata
  }

}
