import { Challenge } from '../types/challenge.type';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
   var challenges:Array<Challenge>=[
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
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });
  it('should sort by votes count',()=>{
    let pipe=new OrderByPipe()
    let result=[
      {
        "title": "B",
        "description": "",
        "votes": {
          "upvotes": [
            1,
            2
          ],
          "downvotes": [
            3,
            2,
            1
          ]
        },
        "createdBy": 1,
        "tags": [],
        "createdOn": new Date("2021-03-26")
      },
      {
        "title": "A",
        "description": "",
        "votes": {
          "upvotes": [
            1,
            2,
            3
          ],
          "downvotes": [
            3,
            2,
            1
          ]
        },
        "createdBy": 1,
        "tags": [],
        "createdOn": new Date("2021-03-25")
      },
      {
        "title": "C",
        "description": "",
        "votes": {
          "upvotes": [
            1,
            2,
            3,
            4
          ],
          "downvotes": [
            3,
            2,
            1,
            4
          ]
        },
        "createdBy": 1,
        "tags": [],
        "createdOn": new Date("2021-03-27")
      }
    ]
    let output=pipe.transform(challenges,"votes","asc")
    expect(output).toStrictEqual(result)
   
  }) 
  it('should sort by title ',()=>{
    let pipe=new OrderByPipe()
    let result=[
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
    let output=pipe.transform(challenges,"title","asc")
    expect(output).toStrictEqual(result)

  }) 
  it('should sort by date ',()=>{
    let pipe=new OrderByPipe()
    let result=[
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
    let output=pipe.transform(challenges,"createdOn","asc")
    expect(output).toStrictEqual(result)
  }) 
});
