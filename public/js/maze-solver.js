function solveMaze(maze) {
    var direction = ["North", "East", "South", "West"];
    var directionIndex = 1; // Start out facing east
    var forward = direction[directionIndex]; // string for storing current direction
    
    var iterations = -1;

    var startingPoint = new Point(0, 2);
    var startTime = getTime();
    var endTime = startTime;
    traverseTheMaze(maze, startingPoint, direction, directionIndex, forward, iterations, startTime, endTime);
}

// Recursively iterates through maze
function traverseTheMaze(maze, p, direction, directionIndex, forward, iterations, startTime, endTime) {
    // Pause 150 ms between each iteration
    setTimeout(function() {
        maze[p.y][p.x] = 'X'; // Capital 'X' marks the current spot
        iterations++; 

        console.clear()

        if ( isExit(forward, p) ) { // base case
            maze[p.y][p.x] = '$'; // '$' when the exit is located
            console.log("RECURSIVE MAZE SOLVER - J. Zhang\n");
            printMaze(maze);
            
            console.log("\nCurrently facing: " + forward );
            console.log("Iterations: " + iterations);
            
            // Prints out the total time for the algorithm (does not include delay time)
            console.log("Total Algorithm Time: " + 
                            ((endTime - startTime)-(iterations*150)) + " milliseconds");
        } else {
            console.log("RECURSIVE MAZE SOLVER - J. Zhang\n");
            printMaze(maze);
            
            console.log("\nCurrently facing: " + forward );
            console.log("Iterations: " + iterations);
            
            // Prints out the time for the algorithm (does not include delay time)
            console.log("Algorithm Time: " + 
                            ((endTime - startTime)-(iterations*150)) + " milliseconds");
            
            if ( lookRight(maze, forward, p) !== '#' ) {
                [forward, directionIndex] = turnRight(direction, directionIndex);
                p = moveForward(maze, forward, p);
                endTime = getTime();
                traverseTheMaze(maze, p, direction, directionIndex, forward, iterations, startTime, endTime);
            }
            else if ( lookForward(maze, forward, p) !== '#' ) {
                p = moveForward(maze, forward, p);
                endTime = getTime();
                traverseTheMaze(maze, p, direction, directionIndex, forward, iterations, startTime, endTime);
            }
            else if ( lookLeft(maze, forward, p) !=='#' ) {
                [forward, directionIndex] = turnLeft(direction, directionIndex, forward);
                p = moveForward(maze, forward, p);
                endTime = getTime();
                traverseTheMaze(maze, p, direction, directionIndex, forward, iterations, startTime, endTime); 
            }
            else { // Dead End
                [forward, directionIndex] = turnRight(direction, directionIndex, forward);
                [forward, directionIndex] = turnRight(direction, directionIndex, forward);
                moveForward(maze, forward, p);
                endTime = getTime();
                traverseTheMaze(maze, p, direction, directionIndex, forward, iterations, startTime, endTime);
            }
        }

    }, 150);
}      