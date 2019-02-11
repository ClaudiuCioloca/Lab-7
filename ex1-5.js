//ex1
var a = 1;
function b() {
a = 10;
return;

}
b();
console.log('a='+ a);


//ex2
for(var i=0; i<5; i++)
{
    (function (i){
    setTimeout(function(){console.log(i++);}, i*1000);
})(i);}

//ex3
try{
    setTimeout(function()
    {
        throw new Error('example')
    },1000)
}catch(err)

//ex4 ES%			

function animal = function(color,type){
    this.color = color;
    this.type = type;
};

animal.prototype.getColor = function(){
    return this.color;
};

//fish
function fish = function(color,type,fishType){
    animal.call(this.color, type);
    his.fishType = fishType;
};

fish.prototype = Object.create(Animal.prototype);

fish.prototype.constructor = Fish;

fish.prototype.getFishType = function() 
{
    return this.fishType;
};

function dog(color,type,dogType) 
{
    Animal.call(this,color, type);
    this.dogType = dogType;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.getdogType = function() 
{
    return this.dogType;
};


function dogType(typeName,furColor) 
{
    this.furColor = furColor;
    this.typeName = typeName;
    
}

DogType.prototype.getFurColor = function() {
    return this.furColor;
};




//es6

class animal 
{
    constructor(color,type) { 
        this.color = color;
        this.type=type;
    }
    
    getColor() { 
        return this.color;
    }
}

class fish extends Animal {
    constructor(color,type,fishType) {
        super(color,type);
        this.fishType=fishType;
    }
    
    getFishType() { 
        return this.fishType;
    }
}


class dogType 
{
    constructor(typeName,furColor) { 
        this.typeName = typeName;
        this.furColor=furColor;
    }
    
    getFurColor() { 
        return this.furColor;
    }
}

class dog extends animal {
    constructor(color,type,dogType) {
        super(color,type);
        this.dogType=dogType;
    }
    
    getDogType() { 
        return this.dogType;
    }
}


//ex5

setTimeout(() => console.log('Blocked!'), 1000);
function blocking() {
let a = 0;
for (let i = 0; i < 1000; i++) {
for(let j = 0; j < i * 10000; j++) {
if (i < j) {
a++;
}
}
}
}
blocking();



