//creating a helper fucntion
//since we're calculating distance in more than one function

function calculateBlockDistance(start, end){
    return Math.abs(start - end)
}

//another helper function
//that calculates block to feet

function calculateBlocksToFeet(blocks){
    return blocks * 264
}

// Code your solution in this file!
// if the location is below or above 42nd street, you could get different results
// Math.abs(a-b) gives you the absolute value of the answer- 
// turning it from negative to positive

function distanceFromHqInBlocks(pickUpLocation){
    const distance = Math.abs(42 -pickUpLocation)
    return calculateBlockDistance(pickUpLocation, 42)
}

distanceFromHqInBlocks(40);
distanceFromHqInBlocks(55);
distanceFromHqInBlocks(0);

//define distance from HQ in feet
//define a parameter which is going to be our pick up location
//use distance from HQ in blocks to calculate the distance in feet
//calculate distance in feet by multiplying it by 264
//return distance in feet

function distanceFromHqInFeet(pickUpLocation){
    const distanceInBlocks = distanceFromHqInBlocks(pickUpLocation)
    return calculateBlocksToFeet(distanceInBlocks)
}

distanceFromHqInFeet(43);
distanceFromHqInFeet(55);
distanceFromHqInFeet(42);

//define a function called distanceTravelledINFeet
//define two parameters - start and end
//calculate distance in blocks absolute value(start-end)
//calculate distance in feet by multiplying blocks * 264
//returns distance travelled in feet

function distanceTravelledInFeet(start, end){
    const blocks = calculateBlockDistance(start, end)
    return calculateBlocksToFeet(blocks)
}
// console.log

//define function called calculateFarePrice
//define 2 parameters - start and end
//calculate distance in feet
//if distance is < 400ft, return 0 (test file does not have $)
//if distance > 400 =< 2,0000, return distance in feet *.02 (2 cents per foot) 
//if distance > 2,000 =< 2,500, return 25
//if distance is > 2,500, return "Cannot travel that far"

//as an if else statement
function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end)
    if (distance <= 400){
        return 0
    } else if (distance > 400 && distance <= 2000){
        return (distance -400) * .02
    } else if (distance > 2000 && distance <= 2500){
        return 25
    } else{
        return "cannot travel that far"
    }
}