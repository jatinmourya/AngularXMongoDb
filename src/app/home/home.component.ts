import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public myservice: MyServiceService) {}

  ngOnInit(): void {
    console.log('HOME COMPONENT LOADED');

    this.fetchAll();
  }
  users: any = [];
  fetchAll() {
    this.myservice.getData().subscribe((res) => {
      // console.log(res);
      var data = JSON.stringify(res);
      this.users = JSON.parse(data);
    });
  }
}
