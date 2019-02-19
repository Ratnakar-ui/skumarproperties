import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  listdata;editedcoun_data;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/country_data").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  country_name = "";
  data;_id ="";
  save() {
    var country_type = {
      country_name: this.country_name,
      _id:this._id
    }
    this.http.post('http://localhost:3000/country_data', country_type).subscribe((req) => {
      console.log(country_type);
    });
  }
  delete(id) {
    this.http.delete("http://localhost:3000/country_data/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/country_data").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/country_data/' + id).subscribe((res) => {
      this.editedcoun_data= res;
      this._id = res[0]._id;
      this.country_name = res[0].country_name;
      // console.log(this.editedcoun_data);
    });
  };
  ngOnInit() {
  }

}
