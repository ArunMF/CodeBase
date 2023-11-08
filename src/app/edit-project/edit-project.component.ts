import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyProjects } from 'src/model/myProjects';
import { Visibility } from 'src/model/visibility';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit{
  projectid:string='';
  projects:MyProjects={};
  visibilities:Visibility[]=[];
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.projectid=data.projectId;

    this.api.viewProjectDetails(this.projectid).subscribe((result:any)=>{
      console.log(result);
      this.projects=result;

    this.api.getAllVisbility().subscribe((data:any)=>{
      console.log(data);
      this.visibilities=data;
    })
    })
    })   
  }

  updateProject(){
    this.api.updateProject(this.projectid,this.projects).subscribe((data:any)=>{
      console.log(data);
      
    })
  }

}
