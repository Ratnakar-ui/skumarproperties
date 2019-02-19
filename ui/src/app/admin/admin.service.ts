import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class adminService {
    constructor(public http: HttpClient) {

    }
    loginService(loginData){
        let details ;
        return new Promise((resolve, reject) =>{
            this.http.post('http://localhost:3000/login',loginData).subscribe((res)=>{
                details = res;
                return resolve(details);
            });
        })
    }
}