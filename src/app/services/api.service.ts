import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProjects } from 'src/model/myProjects';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Dependency injection
  constructor(private http:HttpClient) { }

  // get function for getting all project details
  getAllProjects():Observable<MyProjects>{
    return this.http.get('http://localhost:3000/projects');
  }

  viewProjectDetails(projectId:string){
    return this.http.get(`http://localhost:3000/projects/${projectId}`);
  }

  // get function for getting visibility
  getVisibility(visibleid:string){
    return this.http.get(`http://localhost:3000/visibility/${visibleid}`);
  }

  addProject(projectbody:any){
    return this.http.post('http://localhost:3000/projects',projectbody)
  }

  getAllVisbility(){
    return this.http.get('http://localhost:3000/visibility');
  }

  deleteProject(projectId:string){
    return this.http.delete(`http://localhost:3000/projects/${projectId}`)
  }

  updateProject(projectId:any,projectbody:any){
    return this.http.put(`http://localhost:3000/projects/${projectId}`,projectbody)
  }
}
