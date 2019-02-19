import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  listdata;
  listdata1;
  listdata2;
  edited_district;
  states: any = [];
  stateData: any = [];
  constructor(public http: HttpClient) {
  }
  country_name = "";
  state_name = "";
  district_name = "";
  data; _id;
  save() {
    var district_type = {
      country_name: this.country_name,
      state_name: this.state_name,
      district_name: this.district_name,
      _id: this._id
    }
    this.http.post('http://localhost:3000/district_data', district_type).subscribe((req) => {
      console.log(district_type);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/district_data/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/district_data").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/district_data/' + id).subscribe((res) => {
      this.edited_district = res;
      this._id = res[0]._id;
      this.country_name = res[0].country_name;
      this.state_name = res[0].state_name;
      this.district_name = res[0].district_name;
      // console.log(this.edited_district);
    });
  };
  ngOnInit() {

    this.http.get("http://localhost:3000/country_data").subscribe((res) => {
      console.log(res);
      this.listdata1 = res;
    });

    // this.http.get("http://localhost:3000/state_data").subscribe((res) => {
    //   // this.state = "T.S";
    //   this.states = [{ "India": "A.P" }, { "India": "M.P" },{ "India": "U.P" }];
    //   console.log(res)
    // });

    this.http.get("http://localhost:3000/district_data").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  onCountryChange() {
    console.log(this.country_name);
    this.http.get("http://localhost:3000/state_data").subscribe((res) => {
      console.log(res)
      this.stateData = res
      this.states = [];
      for (let item of this.stateData) {
        if (item.country_name === this.country_name) {
          this.states.push(item);
        }
      }
    });
  }
}
