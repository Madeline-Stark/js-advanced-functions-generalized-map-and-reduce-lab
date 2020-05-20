// Add your functions here

function map(sourceArray, func){
    const newArray = []

    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(func(sourceArray[i]))
    }

    return newArray
}

function reduce(sourceArray, func, startingPoint){

    let total // let doesnt need to be assigned when declared
    let i = 0
    //setting counter to 0 works for all but reduce that deals with truthiness
    //0 is falsy
    //so then can start with first element in array
    if (startingPoint){
        total = startingPoint
    } else {
        total = sourceArray[0] 
        i++ //to skip first element in loop
    }

    for (i; i < sourceArray.length; i++){
        total = func(sourceArray[i], total) 
        //counter = not += b/c going to operate on counter in the function, 
        // + will happen in callback function
    }

    return total
}