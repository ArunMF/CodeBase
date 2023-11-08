import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyProjects } from 'src/model/myProjects';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  // visibleID:any=[];
  searchKey:string='';
  allProjects:any=[];
  constructor(private api:ApiService){}
  ngOnInit():void{
    this.getAllProjects();
  }

  getAllProjects(){
    this.api.getAllProjects().subscribe((data:MyProjects)=>{
      console.log(data);
      this.allProjects=data;
    })
  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value;
  }

    deleteProject(projectId:any){
    this.api.deleteProject(projectId).subscribe((result:any)=>{
      alert("Successfully deleted!")
      this.getAllProjects
    })

    }
  }
