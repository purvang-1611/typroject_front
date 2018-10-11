import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule,MatRadioModule, MatSelectModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './admin/category/category.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AddnewEmployeeComponent } from './admin/employee/addnew-employee/addnew-employee.component';
import { routing } from './app.routing';
import { UpdateEmployeeComponent } from './admin/employee/update-employee/update-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EmployeeComponent,
    AddnewEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
