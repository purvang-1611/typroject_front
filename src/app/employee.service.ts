import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Employee } from './admin/classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employee_url:string="http://localhost:3000/employee/";
employee1_url:string="http://localhost:3000/employee1/";
updatewithimage_url:string="http://localhost:3000/updateWithImage/";

  constructor(private _http:HttpClient) { }
  getAllEmployee(){
    return this._http.get(this.employee_url);
  }
  addEmployee(item:FormData){
    console.log(item);
    return this._http.post(this.employee_url,item);
  }
  updateEmployee(item:Employee){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.employee_url,body,{headers:head1});
  }
  getEmployeeByID(id:string){
    return this._http.get(this.employee_url+id);
  }
  deleteAllEmployee(item:Employee[]){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.employee1_url,body,{headers:head1});
  }
  deleteOneEmployee(id:string){
    return this._http.delete(this.employee_url+id);
  }
  updateWithImage(item:FormData){
    console.log(item);
    return this._http.put(this.updatewithimage_url,item);
  }
}
