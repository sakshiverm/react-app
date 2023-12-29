let firstName = "sakshi"
let count:number= 0
let age:null|string = null 
const user ={
  name: "sakshi",
  age: 22
}

//array
const fruits:string[] = ["banana", "apple"]
//array of object

const users:{id:number, name:string}[]=[{id:1, name:""}, {id:2, name:""}]

//functions
const sum = (a:number,b:number)=>{
  return a+b
}
sum(4,5)

const handleApiResponse=(payload:{userId:number}, callback:(a:number, b:number)=>number)=> {

}


//interface - to define structure of object

interface User{
  name: string
  id: number
}

let data:User[]= [{
  name: "fruits",
  id: 1
}]
