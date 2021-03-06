import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  item_url:string="http://localhost:3000/category/";

  constructor(private _http:HttpClient) { }
  getAllCategory(){
    return this._http.get(this.item_url);
  }
}
