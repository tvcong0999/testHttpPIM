import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  private readonly route = "http://localhost:8200/api/Project";
  getAllProject(){
    return this.http.get(`${this.route}/GetAll`,
    {
      responseType: 'json',
      
    });
  }

  deleteListProject(id: number){
    return this.http.delete(`${this.route}/DeleteProject`);
  }

  createProject(project: Project){
    return this.http.post(`${this.route}/Create`, project);
  }

  updateProject(newProject: Project){
    return this.http.put(`${this.route}/UpdateProject`, newProject);
  }

}
