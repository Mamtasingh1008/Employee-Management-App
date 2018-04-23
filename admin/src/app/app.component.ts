import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  Employees=[
      {name : "Mamta Kumari Singh", empid:"143185", projectname:"SPS"},
    {name : "Steve Watson", empid:"143157", projectname:"McD"},
     ];
   model: any = {}

    addEmp() {
      this.Employees.push(this.model);
      this.model = {}
      alert("Added Succesfully!")
    }

    deleteEmp(i) {
      console.log(i);
      this.Employees.splice(i, 1);
    }

    myvalue;
      editEmp(k) {
        this.model.name = this.Employees[k].name;
        this.model.empid = this.Employees[k].empid;
        this.model.projectname = this.Employees[k].projectname;
        this.myvalue = k;
      }
}
