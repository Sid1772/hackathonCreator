import { Component, OnInit } from '@angular/core';
import { Challenge } from '../types/challenge.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  challengeData:Array<Challenge>=[]
  constructor() { }

  ngOnInit(): void {
    
    
    let challengeData=JSON.parse(localStorage.getItem("challengedata")||"")
    this.challengeData=challengeData
    


  }

}
