import { Component, OnInit ,Input} from '@angular/core';
import { NavbarComponent} from '../navbar/navbar.component'
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
 @Input() intervention:NavbarComponent;
  constructor() { }
 
  ngOnInit(): void {
  }

}
