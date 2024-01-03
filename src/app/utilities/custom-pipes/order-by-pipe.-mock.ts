import { Pipe, PipeTransform } from '@angular/core';
import { Challenge } from '../types/challenge.type';

@Pipe({
  name: 'orderBy',
  pure:false
})
export class OrderByPipeMock implements PipeTransform {

  transform(value: Array<Challenge>,sortBy?: "title"|"votes"|"createdOn",orderBy?:"asc"|"desc"): Array<Challenge> {
    return [
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
}
}