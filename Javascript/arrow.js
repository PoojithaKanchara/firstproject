
name ='fuck;'

function func1(name){
    
    let x = ()=>{
        console.log('arrow', this.name);
    }
    
    x();
}


func1('hello2')


let obj={
    name: 'helo',
    fullName: ()=>{
        console.log(arguments,this.name);
    },
    fname: function(){
        console.log(arguments,this.name);
    }
}

obj.fullName();
//obj.fname(1,2,3);

// There is no arugment parameter in arrow funtions
// Arrow funs are not constructable