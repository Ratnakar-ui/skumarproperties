import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  listdata;  form;
  edited_layout;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost:3000/layout_data").subscribe((res) => {
      console.log(res);
      this.listdata = res;
    });
  }
  layout_name = "";
  status = "";
  data; _id;
  layout_files(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
  }
  save(event: Event) {
    var layout_type = {
      layout_name: this.layout_name,
      layout_files: this.layout_files,
      status: this.status,
      _id: this._id
    }
    this.http.post('http://localhost:3000/layout_data', layout_type).subscribe((req) => {
      console.log(layout_type);
    });
  }
  // onPdfPicked(event: Event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({ pdfForm: file });
  //this.form.get("image").updateValueAndValidity();
  //const reader = new FileReader();
  // reader.onload = () => {
  //   this.imagePreview = reader.result;
  // };
  // reader.readAsDataURL(file);
  // }

  delete(id) {
    this.http.delete("http://localhost:3000/layout_data/" + id).subscribe((res) => {
      console.log(res);
      this.listdata = res;
      this.http.get("http://localhost:3000/layout_data").subscribe((res2) => {
        this.listdata = res2;
      });
    });
  }
  // Edit
  edit(id) {
    // console.log(id);
    this.http.get('http://localhost:3000/layout_data/' + id).subscribe((res) => {
      this.edited_layout = res;
      this._id = res[0]._id;
      this.layout_name = res[0].layout_name;
      this.layout_files = res[0].layout_files;
      this.status = res[0].status
      // console.log(this.edited_layout);
    });
  };
  ngOnInit() {
  }
}