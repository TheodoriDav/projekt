//OBJEKT

const person = {
name:"teo",
age: 32,
city: "stockholm",
adress :{
street:"södertälje"
}

}

console.log(Object.values(person));
console.log(Object.keys(person));


///math i Javascript
console.log((Math.floor)(Math.random() *100));


//uppgift 
// clean array from string to only float 
const dirtyArray =[1,"fem" , 2 , "tre",3]

const cleaArray = dirtyArray.filter(function(element){

    console.log("nu tittar vi på element:" , element)
 return  typeof element === "number";
});

console.log(cleaArray)

//find

const findnumberarray = [1,2,3,4,5,6,7,8,9,10]

const findnumber = findnumberarray.find(function findnumber(number)
{
    return number %5 === 0;
});

const example = "hello world";

const smallexample = example.toUpperCase()

console.log(smallexample)

