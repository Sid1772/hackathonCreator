import { Injectable } from '@angular/core';
import { User } from '../utilities/types/user.type';
import { Challenge } from '../utilities/types/challenge.type';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loggedInUser!:User
  constructor() { }
  getCurrentUser(){
    if(!this.loggedInUser){
      let user=localStorage.getItem("user")
      this.loggedInUser=user?JSON.parse(user):{}
    }
    return this.loggedInUser
  }
  setCurrentUser(user:User){
    localStorage.setItem("user",JSON.stringify(user))
    this.loggedInUser=user
  }
  getSavedData(){
    let data=localStorage.getItem("challengeData")
    if(!data)this.setSavedData([],true)
    return data?JSON.parse(data):[]
  }
  setSavedData(data:Challenge|Array<Challenge>,flag=false){
    let currentData= flag?data:[...this.getSavedData(),data]
    localStorage.setItem("challengeData",JSON.stringify(currentData))
  }
}
