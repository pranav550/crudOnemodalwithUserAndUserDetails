import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
declare var $: any;
@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  Employees: any = [];
  viewEmp: any;
  category = ["india", "china", "usa"];
  isAdd: boolean;
  isEdit: boolean;
  editTemp: any;
  headerName: string;
  viewTemp: any = [];
  multiview: any;
  userForm = new FormGroup({
    id: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required)
  });
 ngOnInit() {}

 /** function of close the modal dialog  */ 
 closeDialog() {
    this.userForm.reset();
  }
 /** function of Show the Employee Records   */ 
  viewEmployee(emp) {
    for (let i = 0; i < this.Employees.length; i++) {
      if (this.Employees[i].id === emp.id) {
        this.viewEmp = this.Employees[i];
        this.multiview = this.Employees[i];
        this.viewTemp = this.Employees;
      }
    }
  }
 /** function of open dialog of add employee  hide and show the submit button  */ 
  openAddDialog() {
    this.headerName = "Add Employeee";
    this.isAdd = true;
    this.isEdit = false;
  }
 /** function of close dialog of close the edit employee  */ 
  closedEdit() {
    for (let i = 0; i < this.Employees.length; i++) {
      this.editTemp = this.userForm.value;
      if (this.Employees[i].id === this.editTemp.id) {
        this.Employees[i] = this.editTemp;
        this.userForm.reset();
      }
    }
    $("#exampleModalLong").modal("toggle");
  }
 /** function of open the modal dialog for hide and show the submit button  */ 
  openEditDialog() {
    console.log("openEditdialog");
    this.headerName = "Edit Employee";
    this.isAdd = false;
    this.isEdit = true;
  }
 /** function of show the fields of when we click on edit */ 
  editEmployee(emp) {
    this.userForm.patchValue({
      id: emp.id,
      name: emp.name,
      gender: emp.gender,
      category: emp.category
    });
  }
 /** function of delete the emplyee  */ 
  deleteEmployee(emp) {
    for (let i = 0; i < this.Employees.length; i++) {
      if (this.Employees[i].id === emp.id) {
        this.Employees.splice(i, 1);
        this.viewEmp = this.Employees;
      }
    }
  }
 /** function of add the employee */ 
  onFormSubmit() {
    this.Employees.push(this.userForm.value);
    this.userForm.reset();
    $("#exampleModalLong").modal("toggle");
  }
}
