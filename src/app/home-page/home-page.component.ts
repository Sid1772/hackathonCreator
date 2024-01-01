import { Component, HostListener, OnInit } from '@angular/core';
import { Challenge } from '../utilities/types/challenge.type';
import { CommonService } from '../services/common.service';
import { User } from '../utilities/types/user.type';
import {faAngleUp,faAngleDown,faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  challengeData:Array<Challenge>=[]
  sortByData=[{label:"Created On",value:"createdOn"},{label:"Votes",value:"votes"},{label:"Title",value:"title"}]
  currentUser:User
  faUp=faAngleUp
  faDown=faAngleDown
  faArrowUp=faArrowUp
  faArrowDown=faArrowDown
  sortBy!:"title"|"votes"|"createdOn"
  sortBylabel:string
  order!:"asc"|"desc"

  isDropdownOpen=false;
 
  constructor(private service:CommonService) { 
    this.currentUser=this.service.getCurrentUser()
    this.sortBylabel="Title"
    this.sortBy="title"
    this.order="asc"
  }

  ngOnInit(): void {

    let challengeData=this.service.getSavedData()
    console.log(challengeData)
    this.challengeData=challengeData
  }
  select(item:any){
    this.sortBy=item.value
    this.sortBylabel=item.label
  }
 
  vote(index:number,flag:Boolean){
    let challenge=this.challengeData[index]
    if(flag){
   if(challenge.votes.downvotes.includes(this.currentUser.id)){
    challenge.votes.downvotes=challenge.votes.downvotes.filter(x=>x!=this.currentUser.id)
   }
   challenge.votes.upvotes.push(this.currentUser.id)
  }
  else{
    if(challenge.votes.upvotes.includes(this.currentUser.id)){
      challenge.votes.upvotes=challenge.votes.upvotes.filter(x=>x!=this.currentUser.id)
     }
     challenge.votes.downvotes.push(this.currentUser.id)
    }
    this.service.setSavedData(this.challengeData,true)
  }
  

}
