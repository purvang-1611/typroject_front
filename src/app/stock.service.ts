import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stock_url:string="http://localhost:3000/stock/";
  constructor(private _http:HttpClient) { }

  getAllStock(){
    return this._http.get(this.stock_url);
  }
}
