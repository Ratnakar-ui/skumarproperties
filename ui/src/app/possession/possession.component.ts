import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-possession',
  templateUrl: './possession.component.html',
  styleUrls: ['./possession.component.css']
})
export class PossessionComponent implements OnInit {
  listdata;
  editedpossession;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/properpossession").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  pro_possession = "";
  status = "";
  data;_id;
  save() {
    var proptype = new FormData();
    proptype.append('pro_possession', this.pro_possession);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/properpossession', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/properpossession/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/properpossession").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
// Edit
edit(id) {
  // console.log(id);
  this.http.get('http://localhost:3000/properpossession/' + id).subscribe((res) => {
    this.editedpossession = res;
    this._id = res[0]._id;
    this.pro_possession = res[0].pro_possession;
    this.status = res[0].status;
    // console.log(this.editedfacing);
  });
};

  ngOnInit() {
  }

}
