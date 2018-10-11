import { Routes,RouterModule } from '@angular/router';
import { AddnewEmployeeComponent } from './admin/employee/addnew-employee/addnew-employee.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';

const arr:Routes=[
  {path:'employee',component:EmployeeComponent},
  {path:'addnewemployee',component:AddnewEmployeeComponent},
  {path:'updateemployee/:EmpID',component:UpdateEmployeeComponent}

];

export const routing=RouterModule.forRoot(arr);
