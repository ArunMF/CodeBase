import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { MyProjects } from 'src/model/myProjects';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{
  visibilities:any=[];
  projects:MyProjects={};
  constructor(private api:ApiService, private router:Router){
    this.projects.visibleId="Select visibility";
  }
  ngOnInit():void{
    this.api.getAllVisbility().subscribe((data:any)=>{
      console.log(data);
      this.visibilities=data;
    })
  }

  addProject(){
    this.api.addProject(this.projects).subscribe((data:any)=>{
      this.router.navigateByUrl('');
    })
  }
}
