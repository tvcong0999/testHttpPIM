import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ServicesService } from '../services/services.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {
  error = new Subject<string>();
  errormessage = null;
  listProject: Array<Project>;
  constructor(private service: ServicesService) { }

  ngOnInit(): void {
    this.error.subscribe(err=>{
      this.errormessage = err;
    })
  }

  onShow(){
    this.service.getAllProject().pipe(map(resData=>{
      const arr = [];
      for(const index in resData)
      {
        arr.push({...resData[index], test: "test transform"});
      }
      return arr;
    })).subscribe((data)=>{
      this.listProject = data as Array<Project>;
      console.log(this.listProject);
    })
  }

  onCreate(){
    let project: Project =
    {
      id: 0,
      groupId: 1,
      projectNumber: 3,
      name:"test",
      customer: "test",
      status: 0,
      startDate: new Date(),
      finishDate: new Date(),
      employeeIds: [1]
    };
    this.service.createProject(project).subscribe(data=>{
      console.log("create ok!");
    },
      err =>{
        this.error.next(err.message);
      }
    )
  }

  onDelete(){
    this.service.deleteListProject(8).subscribe(data=>{
      console.log("delete ok!");
    })
  }

  onUpdate(){
    let project: Project =
    {
      id: 8,
      groupId: 1,
      projectNumber: 3,
      name:"test update",
      customer: "test update",
      status: 0,
      startDate: new Date(),
      finishDate: new Date(),
      employeeIds: [1]
    };
    this.service.updateProject(project).subscribe(data=>{
      console.log("update ok!");
    })
  }
}
