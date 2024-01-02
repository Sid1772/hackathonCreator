import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ChallengeCreatorComponent } from './challenge-creator.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from '../home-page/home-page.component';

describe('ChallengeCreatorComponent', () => {
  let component: ChallengeCreatorComponent;
  let fixture: ComponentFixture<ChallengeCreatorComponent>;
  let router:Router
  let fakeServiceMock:any
  beforeEach(async () => {
    fakeServiceMock = {
      
    }
    await TestBed.configureTestingModule({
      declarations: [ ChallengeCreatorComponent ],
      imports:[RouterTestingModule.withRoutes([{path:"home",component:HomePageComponent}]),FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCreatorComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call add tags', fakeAsync(() => {
    let tag=document.querySelector(".tags") as HTMLDivElement
    let myFunc=jest.spyOn(component,"addTags")
    tag.click()
    tick()
    expect(myFunc).toHaveBeenCalled()
  }));
  it('should call add tags and add to tags list', fakeAsync(() => {
    let tag=document.querySelector(".tags") as HTMLDivElement
    let myFunc=jest.spyOn(component,"addTags")
    tag.click()
    tick()
    expect(myFunc).toHaveBeenCalledWith(component.tags[0])
    expect(component.dataForm.tags[0]).toBe(component.tags[0])
  }));
  it('should call add tags and remoe tags', fakeAsync(() => {
    let tag=document.querySelector(".tags") as HTMLDivElement
    let myFunc=jest.spyOn(component,"addTags")
    component.dataForm.tags.push(component.tags[0])
    tag.click()
    tick()
    expect(myFunc).toHaveBeenCalledWith(component.tags[0])
    expect(component.dataForm.tags.length).toBe(0)
  }));
  it('should call submit method', fakeAsync(() => {
    let tag=document.querySelector(".createButton") as HTMLButtonElement
    let myFunc=jest.spyOn(component,"createChallenge")
    tag.click()
    tick()
    expect(myFunc).toHaveBeenCalled()
    
  }));
});
