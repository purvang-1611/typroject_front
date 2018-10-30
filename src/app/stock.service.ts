import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stock_url:string="http://localhost:3000/stock/";
  private getstockbyin_url:string="http://localhost:3000/getstockbyin/";
  constructor(private _http:HttpClient) { }

  getAllStock(){
    return this._http.get(this.stock_url);
  }
  getStockByIn(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.getstockbyin_url,body,{headers:head1});
  }
}
