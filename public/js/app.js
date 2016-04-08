$(document).ready(function() {
    var maze = getText('maze.txt', parseMaze);
    solveMaze(maze);
});

function getText(file, callback) {
    var text;

    $.ajax({
        url: file,
        dataType: 'text',
        success: function(response) {
            if (callback && typeof(callback) === 'function') {
                text = callback(response);
                //console.log('AJAX success.');
            }
        },
        async: false
    }); 

    return text;
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