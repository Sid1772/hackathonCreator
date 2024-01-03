import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { User } from '../utilities/types/user.type';
import { NgForm } from '@angular/forms';
import { Challenge } from '../utilities/types/challenge.type';
import { appConstants } from '../constants';
import { tag } from '../utilities/types/tags.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge-creator',
  templateUrl: './challenge-creator.component.html',
  styleUrls: ['./challenge-creator.component.css']
})
export class ChallengeCreatorComponent implements OnInit {
  tags:Array<tag>
  dataForm:Challenge={
    title:"",
    description:"",
    tags:[],
    createdBy:0,
    votes:{
      upvotes:[],
      downvotes:[]
    },
    createdOn:new Date()
  }

  constructor(private service:CommonService,private router:Router) {
    this.dataForm.createdBy=this.service.getCurrentUser().id
    this.dataForm.votes.upvotes=[]
    this.dataForm.votes.downvotes=[]
    this.tags=appConstants.tags
   }

  ngOnInit(): void {
  }
  addTags(tag:tag){
    if(this.dataForm.tags.includes(tag)){
      this.dataForm.tags=this.dataForm.tags.filter(x=>x!=tag)
    }
    else{
    this.dataForm.tags.push(tag)}
  }
  createChallenge(data:NgForm){
    console.log(this.dataForm)
    this.dataForm.createdOn=new Date()
    this.service.setSavedData(this.dataForm)
   

  }

}
