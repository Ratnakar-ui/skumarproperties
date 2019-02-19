import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  listdata;
  listdata1;
  stateData: any = []; districtData: any = []; mandalData: any = [];
  states: any = []; districts: any = []; mandals: any = [];
  edited_village;
  constructor(public http: HttpClient) { }

  country_name = "";
  state_name = "";
  district_name = "";
  mandal_name = "";
  village_name = "";
  data; _id;
  save() {
    var village_type = {
      country_name: this.country_name,
      state_name: this.state_name,
      district_name: this.district_name,
      mandal_name: this.mandal_name,
      village_name: this.village_name,
      _id: this._id
    }
    this.http.post('http://localhost:3000/village_data', village_type).subscribe((req) => {
      console.log(village_type);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/village_data/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/village_data").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/village_data/' + id).subscribe((res) => {
      this.edited_village = res;
      this._id = res[0]._id;
      this.country_name = res[0].country_name;
      this.state_name = res[0].state_name;
      this.district_name = res[0].district_name;
      this.mandal_name = res[0].mandal_name;
      this.village_name = res[0].village_name;
      // console.log(this.edited_village);
    });
  };
  ngOnInit() {
    this.http.get("http://localhost:3000/country_data").subscribe((res) => {
      console.log(res);
      this.listdata1 = res;
    });
    this.http.get("http://localhost:3000/village_data").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }
  onCountryChange() {
    console.log(this.country_name);
    this.http.get("http://localhost:3000/state_data").subscribe((res) => {
      // this.state = "T.S";
      // this.states = [{ "India": "A.P" }, { "India": "M.P" },{ "India": "U.P" }];
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
  onDistrictChange() {
    this.http.get("http://localhost:3000/mandal_data").subscribe((res) => {
      console.log(res);
    console.log(this.district_name);
    
      this.mandalData = res;
      this.mandals = [];
      for (let item of this.mandalData) {
        if (item.district_name === this.district_name) {
          console.log(this.mandal_name);
          this.mandals.push(item);
        }
      }
    });
  }
}