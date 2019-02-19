import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  listdata;
  listdata1; edited_state;
  constructor(public http: HttpClient) { }

  country_name = "";
  state_name = "";
  data; _id;
  save() {
    var state_type = {
      country_name: this.country_name,
      state_name: this.state_name,
      _id: this._id
    }
    this.http.post('http://localhost:3000/state_data', state_type).subscribe((req) => {
      console.log(state_type);
    });
  }  
  delete(id) {
    this.http.delete("http://localhost:3000/state_data/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/state_data").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/state_data/' + id).subscribe((res) => {
      this.edited_state = res;
      this._id = res[0]._id;
      this.country_name = res[0].country_name;
      this.state_name = res[0].state_name;
      // console.log(this.edited_state);
    });
  };
  ngOnInit() {
    this.http.get("http://localhost:3000/state_data").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
    this.http.get("http://localhost:3000/country_data").subscribe((res) => {
      console.log(res);
      this.listdata1 = res;
    });
  }

}
