import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../item.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Item } from '../../classes/item';
import { IngredientsDetail } from "../../classes/ingredientsdetail";
import { Stock } from "../../classes/stock";
import { StockService } from 'src/app/stock.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemIMG:string;
  itemNAME:string;
  itemID:number;
  itemPRICE:number;
  itemCATEGORY:string;
  itemTYPE:string;
  itemPREPARETIME:String;
  itemINGREDIENTS:string;
  ingredientsIDarr:string[]=[];
  ingredientsUNITarr:string[]=[];
  itemINGREDIENTSDETAIL:IngredientsDetail[]=[];
  ingredientsIDarr1:string[]=[];

  constructor(private _receive:ActivatedRoute,private _send:Router,private _item:ItemService,private _stock:StockService) { }

  ngOnInit() {
    this.itemID=this._receive.snapshot.params['itemID'];
    this._item.getItemById(this.itemID).subscribe(
      (data:any)=>{
        console.log(data);
        this.itemIMG = data[0].itemIMG;
        this.itemNAME = data[0].itemNAME;
        this.itemPRICE=data[0].itemPRICE;
        this.itemCATEGORY=data[0].categoryNAME;
        this.itemTYPE=data[0].itemTYPE;
        this.itemPREPARETIME=data[0].itemPREPARETIME;
        this.itemINGREDIENTS=data[0].itemINGREDIENTS;
        let ingredientarr:string[]=[];
        ingredientarr=this.itemINGREDIENTS.split("|");
        console.log(ingredientarr);

        for(let i=0;i<ingredientarr.length;i++){
          if(i%2==0){
            this.ingredientsIDarr.push(ingredientarr[i]);

          }
          else{
            this.ingredientsUNITarr.push(ingredientarr[i]);
          }
        }

        this._stock.getStockByIn(this.ingredientsIDarr).subscribe(
          (data:Stock[])=>{
            for(let i=0;i<data.length;i++){
              this.itemINGREDIENTSDETAIL.push(new IngredientsDetail(data[i].stockID,data[i].stockNAME,parseInt(this.ingredientsUNITarr[i])));
            }

          }
        );


      }
    )
  }

}
