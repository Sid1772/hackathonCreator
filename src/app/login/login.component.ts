import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { User } from '../utilities/types/user.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private router:Router,private service:CommonService) { }
  showError=false
  ngOnInit(): void {
  }
  handleSubmit(user:User){
    if(user.id==undefined||!user.id){
      this.showError=true;
      return;
    }
    this.showError=false
    this.service.setCurrentUser(user)
    
  }
  handleInput(ev:any){
    let symbol = String.fromCharCode(ev.keyCode);
    let regEx = /\d/;
    console.log(symbol)
    if (!regEx.test(symbol)) {
      console.log("here")
      ev.preventDefault();
      return false; 
    }
    return true
  }

}
