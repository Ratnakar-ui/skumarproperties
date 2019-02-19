import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  listdata;editedtype;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/propertype").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }

  pro_type = "";
  show_amenties = "";
  status = "";
  data;_id;
  save() {
    var proptype = new FormData();
    proptype.append('pro_type', this.pro_type);
    proptype.append('show_amenties', this.show_amenties);
    proptype.append('status', this.status);
    proptype.append('_id', this._id);

    this.http.post('http://localhost:3000/propertype', proptype).subscribe((req) => {
      console.log(proptype);
    });
  }

  delete(id) {
    this.http.delete("http://localhost:3000/propertype/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/propertype").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/propertype/' + id).subscribe((res) => {
      this.editedtype = res;
      this._id = res[0]._id;
      this.pro_type = res[0].pro_type;
      this.show_amenties = res[0].show_amenties;
      this.status = res[0].status;
      // console.log(this.editedfacing);
    });
  };
  ngOnInit() {
  }

}
