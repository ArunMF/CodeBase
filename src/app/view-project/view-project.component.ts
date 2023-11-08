import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit{
  projectId:string=''
  project:any=[]
  visibleID:string=''
  visibleName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.projectId=data.id;
      console.log(this.projectId);
      
      this.api.viewProjectDetails(this.projectId).subscribe((result:any)=>{
        console.log(result);
        this.project=result;
        this.visibleID=result.visibleId;
        console.log(this.visibleID);

        this.api.getVisibility(this.visibleID).subscribe((data:any)=>{
          console.log(data);
          this.visibleName=data.name;
          console.log(this.visibleName);
          
        })
      })
    })
  }
}
