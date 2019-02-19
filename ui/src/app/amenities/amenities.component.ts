import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  listdata;
  editedamenities;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_amenities").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  pro_amenities = "";
  status = "";
  data;
  _id;
  save() {
    var proptype = new FormData();
    proptype.append('pro_amenities', this.pro_amenities);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);


    this.http.post('http://localhost:3000/property_amenities', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/property_amenities/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_amenities").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_amenities/' + id).subscribe((res) => {
      this.editedamenities = res;
      this._id = res[0]._id;
      this.pro_amenities = res[0].pro_amenities;
      this.status = res[0].status;
      // console.log(this.editedamenities);
    });
  };
  ngOnInit() {
  }

}
