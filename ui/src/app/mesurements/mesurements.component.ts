import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mesurements',
  templateUrl: './mesurements.component.html',
  styleUrls: ['./mesurements.component.css']
})
export class MesurementsComponent implements OnInit {
  listdata;
  editedmeasurements;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/property_measurements").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  property_measurments = "";
  status = "";
  data;_id;
  save() {
    var proptype = new FormData();
    proptype.append('property_measurments', this.property_measurments);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);
    this.http.post('http://localhost:3000/property_measurements', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/property_measurements/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/property_measurements").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/property_measurements/' + id).subscribe((res) => {
      this.editedmeasurements = res;
      this._id = res[0]._id;
      this.property_measurments = res[0].property_measurments;
      this.status = res[0].status;
      // console.log(this.editedmeasurements);
    });
  };
  ngOnInit() {
  }

}
