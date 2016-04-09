function turnRight(direction, directionIndex) {
    directionIndex = (directionIndex + 1) % 4;
    var forward = direction[directionIndex];

    return [forward, directionIndex];
}

function turnLeft(direction, directionIndex) {
    directionIndex = (directionIndex + 3) % 4;
    var forward = direction[directionIndex];

    return [forward, directionIndex];
}

function lookRight(maze, forward, p) {
    if ( forward === "North" )          
        return maze[p.y][p.x+1];
    else if ( forward === "East" )
        return maze[p.y+1][p.x];
    else if ( forward === "South" )
        return maze[p.y][p.x-1];
    else // forward equals "west"
        return maze[p.y-1][p.x];
}

function lookForward(maze, forward, p) {
    if ( forward === "North" )          
        return maze[p.y-1][p.x];
    else if ( forward === "East" )
        return maze[p.y][p.x+1];
    else if ( forward === "South" )
        return maze[p.y+1][p.x];
    else // forward equals "west"
        return maze[p.y][p.x-1];
}

function lookLeft(maze, forward, p) {
    if ( forward === "North" )          
        return maze[p.y][p.x-1];
    else if ( forward === "East" )
        return maze[p.y-1][p.x];
    else if ( forward === "South" )
        return maze[p.y][p.x+1];
    else // forward equals "west"
        return maze[p.y+1][p.x];
}

function moveForward(maze, forward, p) {
    maze[p.y][p.x] = 'x'; // Marks the current point before moving
        
    if ( forward === "North" )          
        p.y--;
    else if ( forward === "East" )
        p.x++;
    else if ( forward === "South" )
        p.y++;
    else // forward equals "west"
        p.x--;

    return p;
}

// Based on the forward direction, the method determines whether or not the 
// current point on the maze is an exit.
function isExit(forward, p) {
    // Combines direction and location on border of the maze to determine an exit
    if ( forward === "North" && p.y == 0 )          
        return true;
    else if ( forward === "East" && p.x == 11 )
        return true;
    else if ( forward === "South" && p.y == 11 )
        return true;
    else if ( forward === "West" && p.x == 0 )
        return true;
    else
        return false;
}  

// Print the maze to console
function printMaze(maze) {
    for(var y = 0; y < maze.length; y++) {
        var line = "";

        for(var x = 0; x < 12; x++) {
            line+=" " + maze[y][x];
        }

        console.log(line);
    }
}

// Simple Point class
function Point(x, y){
    this.x = Number(x) || 0;
    this.y = Number(y) || 0;
};

// Returns current time in milliseconds
function getTime() {
    var date = new Date();
    return date.getTime();
}