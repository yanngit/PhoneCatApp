import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  public phones;

  constructor(private http: HttpClient) { 

    http.get("assets/phones/phones.json").subscribe( data => {
      this.phones = data 
    });
  }

  ngOnInit() {
  }

}
