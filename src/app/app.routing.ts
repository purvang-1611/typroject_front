import { Routes,RouterModule } from '@angular/router';
import { AddnewEmployeeComponent } from './admin/employee/addnew-employee/addnew-employee.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';
import { ItemComponent } from './admin/item/item.component';
import { AddItemComponent } from './admin/Item/add-item/add-item.component';
import { UpdateItemComponent } from './admin/Item/update-item/update-item.component';
import { ItemDetailsComponent } from './admin/item/item-details/item-details.component';
const arr:Routes=[
  {path:'employee',component:EmployeeComponent},
  {path:'addnewemployee',component:AddnewEmployeeComponent},
  {path:'updateemployee/:EmpID',component:UpdateEmployeeComponent},
  {path:'item',component:ItemComponent},
  {path:'addnewitem',component:AddItemComponent},
  {path:'updateitem/:itemID',component:UpdateItemComponent},
  {path:'itemdetails/:itemID',component:ItemDetailsComponent}

];

export const routing=RouterModule.forRoot(arr);
