function distanceFromHqInBlocks(location) {
    let scuberq = 42;
    return Math.abs(scuberq-location);
  }
  function distanceFromHqInFeet(location) {
    let scuberq = 42;
    return Math.abs(scuberq-location) * 264;
    
  }
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
         
}
function calculatesFarePrice(start, destination) {
    let distance=Math.abs(destination-start)*264;
    if(distance>2500) {
        return "cannot travel that far";
    }
    else if(distance>2000) {
        return 25;
    }
    
    else if(distance>400) {
        return 2.56;
    }
   
    else {
        return 0;
    }
};

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}!`;
};
let wrapAdjective = function(valueAdjective= "*") {
    return function (emphatic = "a hard workor") {
        return `You are ${valueAdjective}${emphatic}${valueAdjective}!`;
    };
};