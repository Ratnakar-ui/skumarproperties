import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-facing',
  templateUrl: './facing.component.html',
  styleUrls: ['./facing.component.css']
})
export class FacingComponent implements OnInit {
  listdata;
  editedfacing;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_facing").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  property_facing = "";
  status = "";
  data;
  _id;
  save() {
    var proptype = new FormData();
    proptype.append('property_facing', this.property_facing);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);
    this.http.post('http://localhost:3000/property_facing', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/property_facing/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_facing").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_facing/' + id).subscribe((res) => {
      this.editedfacing = res;
      this._id = res[0]._id;
      this.property_facing = res[0].property_facing;
      this.status = res[0].status;
      // console.log(this.editedfacing);
    });
  };
  ngOnInit() {
  }

}
