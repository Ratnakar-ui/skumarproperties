import { Component, OnInit } from '@angular/core';
import { adminService } from './admin.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  msg;
  login(loginData) {
    this.adminService.loginService(loginData).then(data => {
      this.msg = data;
      if (this.msg.status == 'Success') {
        this.router.navigate(['/configuration']);
      }
    });
  }
  constructor(public adminService: adminService, public router: Router) { }

  ngOnInit() {
  }

}