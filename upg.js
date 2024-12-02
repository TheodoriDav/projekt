///funktion///
function celstofahre(celsius){

    return(celsius * 9/5) +32;
}

console.log(celstofahre(10))

///for of loop ///
let colors = {e1:"red" , e2: "green" ,e3: "blue"}
for (let color in colors) {

    console.log(colors[color]);
}