import { Component, OnInit } from '@angular/core';
import { Category } from '../../classes/category';
import { CategoryService } from '../../../category.service';
import { StockService } from '../../../stock.service';
import { Stock } from '../../classes/stock';
import { MatTableDataSource } from "../../../../../node_modules/@angular/material";
import { IngredientsDetail } from '../../classes/ingredientsdetail';
import { Item } from '../../classes/item';
import { ItemService } from '../../../item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemNAME:string="";
  itemPRICE:number;
  itemTYPE:string="REGULAR";
  itemINGREDIENTSNAME:string="";
  itemINGREDIENTSUnit:number=0;
  ingredientunitarr:number[]=[];
  ingredientnamearr:Stock[]=[];
  ingredientsobj:Stock;
  itemPREPARETIME:string;
  itemPREPARETIMEarr:number[]=[];
  CategoryID:number=0;
  categoryarr:Category[]=[];
  itemtypearr:string[]=[
    'REGULAR','JAIN'
  ];
  unit:number=5;
itemINGREDIENTS:string="";
itemINGREDIENTSDETAIL:IngredientsDetail[]=[];
dataSourceOfIngredient=new MatTableDataSource();
displayedColumnsOfIngredient:string[]=[
  'IngredientName',"IngredientUnit"
];
selectedFile:File=null;

  constructor(private _send:Router,private _cat:CategoryService,private _stock:StockService,private _item:ItemService) { }

  ngOnInit() {
    this._cat.getAllCategory().subscribe(
      (data:Category[])=>{

        this.categoryarr=data;
        console.log(this.categoryarr);
      }
    );

    this._stock.getAllStock().subscribe(
      (data:Stock[])=>{
        this.ingredientnamearr=data;
      }
    );
    for(let j=20;j<100;j=j+5){
      this.itemPREPARETIMEarr.push(j);
    }
      for(let i=1;i<30;i++){
        this.ingredientunitarr.push(this.unit);
        if(this.unit<=5){
          this.unit+=5;
        }
        else if(this.unit>5 && this.unit<100){
          this.unit+=10;
        }
        else if(this.unit>=100 && this.unit<1000){
          this.unit+=50;
        }

      }
  }
  onAddIngredients(){
    this.ingredientsobj=this.ingredientnamearr.find(x=>x.stockNAME==this.itemINGREDIENTSNAME);

    this.itemINGREDIENTSDETAIL.push(new IngredientsDetail(this.ingredientsobj.stockID,this.itemINGREDIENTSNAME,this.itemINGREDIENTSUnit));
    this.dataSourceOfIngredient.data=this.itemINGREDIENTSDETAIL;

    this.itemINGREDIENTS+=this.ingredientsobj.stockID+"|"+this.itemINGREDIENTSUnit+"|";
    this.ingredientnamearr.splice(this.ingredientnamearr.indexOf(this.ingredientsobj),1);
    this.itemINGREDIENTSNAME="";
    this.itemINGREDIENTSUnit=0;

  }
  onSaveItem(){
    const fd=new FormData();
    fd.append('itemNAME',this.itemNAME);
    fd.append('itemPRICE',this.itemPRICE+"");
    fd.append('itemINGREDIENTS',this.itemINGREDIENTS);
    fd.append('itemIMG',this.selectedFile,this.selectedFile.name);
    fd.append('fkCategoryID',this.CategoryID+"");
    fd.append('itemPREPARETIME',this.itemPREPARETIME);
    fd.append('itemTYPE',this.itemTYPE);
    this._item.getItemByName(this.itemNAME).subscribe(
      (data:Item[])=>{
        if(data.length===1){
          alert("Item Already present.");
        }
        else{
          this._item.AddNewItem(fd).subscribe(
            (data:any)=>{
              this._send.navigate(['/item']);
            }
          );
        }
      }
    );

  }
  onAddPicture(value){
    this.selectedFile=<File>value.target.files[0];
  }
}
