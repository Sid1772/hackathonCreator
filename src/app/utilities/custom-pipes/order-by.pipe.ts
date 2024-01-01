import { Pipe, PipeTransform } from '@angular/core';
import { Challenge } from '../types/challenge.type';

@Pipe({
  name: 'orderBy',
  pure:false
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<Challenge>,sortBy?: "title"|"votes"|"createdOn",orderBy?:"asc"|"desc"): Array<Challenge> {
    let finalArray=[]
    if(sortBy=="title"){
    finalArray=  value.sort((a,b)=>b.title.localeCompare(a.title))
      
      
    }
    else if(sortBy=="votes"){
      finalArray= value.sort((a,b)=>(a .votes.upvotes.length+a.votes.downvotes.length)-(b.votes.upvotes.length+b.votes.downvotes.length))
    }
    else if(sortBy=="createdOn"){
      finalArray= value.sort((a,b)=>a.createdOn.getTime()-b.createdOn.getTime())
    }
    else{
      finalArray=value
    }

    return orderBy=="desc"?finalArray.reverse():finalArray;
  }

}
