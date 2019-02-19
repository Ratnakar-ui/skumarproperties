import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {
  listdata;editedparking;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_parking").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  property_parking = "";
  status = "";
  data;_id;
  save() {
    var proptype = new FormData();
    proptype.append('property_parking', this.property_parking);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/property_parking', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }
  delete(id) {
    this.http.delete("http://localhost:3000/property_parking/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_parking").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_parking/' + id).subscribe((res) => {
      this.editedparking = res;
      this._id = res[0]._id;
      this.property_parking = res[0].property_parking;
      this.status = res[0].status;
      // console.log(this.editedfacing);
    });
  };
  ngOnInit() {
  }
}
