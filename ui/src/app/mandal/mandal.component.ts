import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-mandal',
  templateUrl: './mandal.component.html',
  styleUrls: ['./mandal.component.css']
})
export class MandalComponent implements OnInit {
  listdata;
  listdata1;
  edited_mandal;
  stateData: any = [];
  states: any = [];
  districtData: any = [];
  districts: any = [];
  constructor(public http: HttpClient) { }

  country_name = "";
  state_name = "";
  district_name = "";
  mandal_name = "";
  data; _id;
  save() {
    var mandal_type = {
      country_name: this.country_name,
      state_name: this.state_name,
      district_name: this.district_name,
      mandal_name: this.mandal_name,
      _id: this._id
    }
    this.http.post('http://localhost:3000/mandal_data', mandal_type).subscribe((req) => {
      console.log(mandal_type);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/mandal_data/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/mandal_data").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/mandal_data/' + id).subscribe((res) => {
      this.edited_mandal = res;
      this._id = res[0]._id;
      this.country_name = res[0].country_name;
      this.state_name = res[0].state_name;
      this.district_name = res[0].district_name;
      this.mandal_name = res[0].mandal_name
      // console.log(this.edited_district);
    });
  };
  ngOnInit() {
    this.http.get("http://localhost:3000/country_data").subscribe((res) => {
      console.log(res);
      this.listdata1 = res;
    });
    this.http.get("http://localhost:3000/mandal_data").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  };

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

  onStateChange() {
    console.log(this.state_name);
    this.http.get("http://localhost:3000/district_data").subscribe((res) => {
      console.log(res);
      // this.listdata3 = res;
      this.districtData = res;
      this.districts = [];
      for (let item of this.districtData) {
        if (item.state_name === this.state_name) {
          console.log(this.district_name);
          this.districts.push(item);
        }
      }
    });
  }
}
