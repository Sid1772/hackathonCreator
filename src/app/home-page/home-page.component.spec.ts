import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { OrderByPipe } from '../utilities/custom-pipes/order-by.pipe';
import { OrderByPipeMock } from '../utilities/custom-pipes/order-by-pipe.-mock';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let router:Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent,OrderByPipe ],
      imports:[RouterTestingModule.withRoutes([{path:"login",component:LoginComponent},{path:"home",component:HomePageComponent}])]
    })
    .compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router)
    fixture.detectChanges();
    let transform=jest.spyOn(OrderByPipe.prototype,"transform")
    transform.mockReturnValue([
      {title:"A",description:"",votes:{
        upvotes:[1,2,3],
        downvotes:[3,2,1]
      },createdBy:1,tags:[],createdOn:new Date("2021-03-25")},
      {title:"B",description:"",votes:{
        upvotes:[1,2],
        downvotes:[3,2,1]
      },createdBy:1,tags:[],createdOn:new Date("2021-03-26")},
      {title:"C",description:"",votes:{
        upvotes:[1,2,3,4],
        downvotes:[3,2,1,4]
      },createdBy:1,tags:[],createdOn:new Date("2021-03-27")}
    ])
    component.challengeData=[
      {title:"A",description:"",votes:{
        upvotes:[1,2,3],
        downvotes:[3,2,1]
      },createdBy:1,tags:[],createdOn:new Date("2021-03-25")},
      {title:"B",description:"",votes:{
        upvotes:[1,2],
        downvotes:[3,2,1]
      },createdBy:1,tags:[],createdOn:new Date("2021-03-26")},
      {title:"C",description:"",votes:{
        upvotes:[1,2,3,4],
        downvotes:[3,2,1,4]
      },createdBy:1,tags:[],createdOn:new Date("2021-03-27")}
    ]
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call vote method', fakeAsync( () => {
   
    let myFunc=jest.spyOn(component,"vote")
    tick()
    fixture.detectChanges()
    let btn=document.querySelector(".upvoteButton") as HTMLButtonElement
    btn.click()
    expect(myFunc).toHaveBeenCalledWith(0,true)
  }));
  it('should call vote method with false', fakeAsync( () => {
    
    let myFunc=jest.spyOn(component,"vote")
    
    tick()
    fixture.detectChanges()
    let btn=document.querySelector(".downvoteButton") as HTMLButtonElement
    btn.click()
    expect(myFunc).toHaveBeenCalledWith(0,false)
  }));
  it('should  update upvote count', fakeAsync( () => {
    
    let myFunc=jest.spyOn(component,"vote")
   let [upvotesLength,downvotesLength]= [component.challengeData[0].votes.upvotes.length,component.challengeData[0].votes.downvotes.length]
    tick()
    fixture.detectChanges()
    let btn=document.querySelector(".upvoteButton") as HTMLButtonElement
    btn.click()
    expect(component.challengeData[0].votes.upvotes.length).toBe(upvotesLength+1)
    
  }));
  it('should  update downvote count', fakeAsync( () => {
    
    let myFunc=jest.spyOn(component,"vote")
   let [upvotesLength,downvotesLength]= [component.challengeData[0].votes.upvotes.length,component.challengeData[0].votes.downvotes.length]
    tick()
    fixture.detectChanges()
    let btn=document.querySelector(".downvoteButton") as HTMLButtonElement
    btn.click()
    expect(component.challengeData[0].votes.downvotes.length).toBe(downvotesLength+1)
    
  }));
});
