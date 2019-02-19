import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
  listdata;editedstatus;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/properstatus").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  pro_status = "";
  status = "";
  data;_id;
  save() {
    var proptype = new FormData();
    proptype.append('pro_status', this.pro_status);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/properstatus', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }
// Edit
edit(id) {
  // console.log(id);
  this.http.get('http://localhost:3000/properstatus/' + id).subscribe((res) => {
    this.editedstatus = res;
    this._id = res[0]._id;
    this.pro_status = res[0].pro_status;
    this.status = res[0].status;
    // console.log(this.editedfacing);
  });
};
  delete(id) {
    this.http.delete("http://localhost:3000/properstatus/"+id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/properstatus").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }

  ngOnInit() {
  }

}
