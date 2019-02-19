import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  listdata;
  editedage;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_age").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  pro_age = "";
  status = "";
  _id;
  data;
  save() {
    var proptype = new FormData();
    proptype.append('pro_age', this.pro_age);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/property_age', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/property_age/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_age").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_age/' + id).subscribe((res) => {
      this.editedage = res;
      this._id = res[0]._id;
      this.pro_age = res[0].pro_age;
      this.status = res[0].status;
      
      // console.log(this.editedage);
    });
  };
  ngOnInit() {
  }

}
