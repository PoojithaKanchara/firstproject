
// function as property/ key in the object
let emp = {
    fname: "Pooo",
    lastname:"Reddy",
    age:28,
    fullName: function(){
        return this.fname+" "+this.lastname +" "+ this.age;
    }
  }
  
  emp['gender']='female' // this is equalant to" emp.gender = 'female'""
  Object.freeze(emp);
  Object.keys(emp);
  
  console.log(emp.fullName())
  console.log(emp);
  
  // [] square bracket
  // {} currry bracket
  // () paranthesis
  
  for( let p in emp){
      console.log(p+" :"+ emp[p])
  }
  
  console.log(Object.values(emp))
  
  console.log('Using object entries')
  
  for( let [k, v] of Object.entries(emp)){
      console.log(k+" :"+ v)
  }
  
  function print(a, b){
      console.log(a)
      console.log(b);
  }
  
  print(emp, [1,23,34])
  