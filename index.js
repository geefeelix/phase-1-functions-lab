function distanceFromHqInBlocks(pickUp) {
 if (pickUp <42) {
    return 42 - pickUp}
else if (pickUp >42) {
    return pickUp -42}
}

function distanceFromHqInFeet(pickUp) {
console.log(pickUp)   
return(distanceFromHqInBlocks(pickUp)*264)
}

function distanceTravelledInFeet(start, destinationBlocks){
if (start < destinationBlocks){
    return(destinationBlocks-start)*264 
}
else{
    return(start-destinationBlocks)*264
}
}

function calculatesFarePrice(start, destination){
let distanceTravelled = distanceTravelledInFeet(start, destination)
if (distanceTravelled <400){
    return 0}
else if (distanceTravelled >400 && distanceTravelled<2000){
    return (distanceTravelled - 400) * 0.02}
else if (distanceTravelled >2000 && distanceTravelled<2500){
    return (25)}
else if (distanceTravelled >2500){
    return 'cannot travel that far'}
}



