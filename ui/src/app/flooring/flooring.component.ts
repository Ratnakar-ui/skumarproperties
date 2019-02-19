import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-flooring',
  templateUrl: './flooring.component.html',
  styleUrls: ['./flooring.component.css']
})
export class FlooringComponent implements OnInit {
  listdata;
  editedflooring;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_flooring").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  property_flooring = "";
  status = "";
  _id;
  data;
  save() {
    var proptype = new FormData();
    proptype.append('property_flooring', this.property_flooring);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/property_flooring', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/property_flooring/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_flooring").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_flooring/' + id).subscribe((res) => {
      this.editedflooring = res;
      this._id = res[0]._id;
      this.property_flooring = res[0].property_flooring;
      this.status = res[0].status;
      // console.log(this.editedfacing);
    });
  };
  ngOnInit() {
  }

}
