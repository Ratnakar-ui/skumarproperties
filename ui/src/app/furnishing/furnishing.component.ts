import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-furnishing',
  templateUrl: './furnishing.component.html',
  styleUrls: ['./furnishing.component.css']
})
export class FurnishingComponent implements OnInit {
  listdata;
  editedfurnishing;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_furnishing").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  property_furnishing = "";
  status = "";
  data;
  _id;
  save() {
    var proptype = new FormData();
    proptype.append('property_furnishing', this.property_furnishing);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/property_furnishing', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }
  delete(id) {
    this.http.delete("http://localhost:3000/property_furnishing/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_furnishing").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_furnishing/' + id).subscribe((res) => {
      this.editedfurnishing = res;
      this._id = res[0]._id;
      this.property_furnishing = res[0].property_furnishing;
      this.status = res[0].status;
      // console.log(this.editedfacing);
    });
  };
  ngOnInit() {
  }

}
