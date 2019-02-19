import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  listdata;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/weblist").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }
  address = "";
  email = "";
  contact = "";
  about = "";
  ourvision = "";

  data;
  saveData() {
    var uploadData = new FormData();
    uploadData.append('address', this.address);
    uploadData.append('email', this.email);
    uploadData.append('contact', this.contact);
    uploadData.append('about', this.about);
    uploadData.append('ourvision', this.ourvision);

    this.http.post("http://localhost:3000/websettings", uploadData).subscribe((req) => {
      console.log(uploadData);
    });
  }
  delete(id) {
    this.http.delete("http://localhost:3000/weblist/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  ngOnInit() {
  }

}
