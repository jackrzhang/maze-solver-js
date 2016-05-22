$(document).ready(function() {
    getText('maze.txt', function(data) {
        var maze = parseMaze(data);
        solveMaze(maze);
    });
});

function getText(file, callback) {
    $.ajax({
        url: file,
        dataType: 'text',
        success: function(response) {
            if (callback && typeof(callback) === 'function') {
                callback(response);
            }
        }
    }); 
}

function parseMaze(data) {
    var maze = [];
    var line = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i] === '\n') {
            maze.push(line);
            line = []; 
        }                
        else {
            line.push(data[i]);
        }
    }

    return maze;
}