// classes also ..
// dog, cat, cow, ox,  ===> animals
// tata nexon, baleon, breza ====> cars
// valvo, scania, ashok lyland, ===> vehicles

class Animals{

    legs = null; // member vaiablbs 
    color =null;
    breed = null;
    constructor(legs, color, breed){
        this.legs = legs;
        this.color =color; 
        this.breed =breed;
    }

    print(){ // fucntions of the class

        console.log("colr: "+this.color);
    }
    isVegatarion(){
        if(this.legs == 4){
            return true;
        }
        return false;
    }

}

let dog = new Animals(4, 'black', 'doll Machine');

let cat = new Animals(4, 'green', 'fuick')
let pooja = new Animals(2, 'white', 'man')
cat.print();

console.log(dog);
console.log(cat);

console.log(" is nonveg: : "+cat.isVegatarion());
console.log(" is vegegarion: "+pooja.isVegatarion());
