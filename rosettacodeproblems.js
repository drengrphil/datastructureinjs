// Rosetta Code is a list of programming challenges
// to master programming skills.

/*
 * 100 Doors
 * There are 100 doors in a row that are all initially closed.
 * Pass through the doors and toggle the door (if the door is closed,
 * open it, if it is open, close it).
 * In the second pass, visit only every second door (#2, #4, #6,...)
 * and toggle it. 
 * In the 3rd time, visit every 3rd door (#3, #6, #9) until 100th door.
 */
// Check for even or odd index
// function isEvenOrOdd(num) { return num % 2;}

function getFinalOpenedDoors(numDoors){
    var numPasses = 3;
    // All doors initially closed.
    var doorsToggled = new Array(numDoors).fill(0);
    // 0: doorClosed doorOpen: 1
    for (var i = 0; i < numPasses; i++){
        // Starting index
        var ind = 0;
        // Incremental
        var incr = 1;
    
        if (i === 1){
            // Every 2 doors
            ind = 2;
            incr = 2;
        } else if (i === 2){
            // Every 3 doors
            ind = 3;
            incr = 3;
        }

        while (ind <= numDoors){
            if (doorsToggled[ind] === 0){
                // Door Closed, Open it
                doorsToggled[ind] = 1;
            } else if (doorsToggled[ind] === 1){
                // Door Open, Close it.
                doorsToggled[ind] = 0;
            }
            ind = ind + incr;
        }
    }

    var finalDoorOpen = [];
    for (var j = 0; j < numDoors; j++){
        if (doorsToggled[j] === 1){
          console.log(j);
            finalDoorOpen.push(j);
        }
    }
    return finalDoorOpen;
}

getFinalOpenedDoors(100);