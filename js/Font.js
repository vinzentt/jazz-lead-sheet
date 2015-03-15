define(function(require, exports){

    exports.getChordRoot = function(root) {
        return root.replace('b','ь');
    };

    var colors = {
        'm7b5' : 'Ø',
        'b' : 'β',
        '69' : '±',
        'dim' : '°',
        'maj7' : '|aae|',
        '7M' : '|adb|',
        'm' : 'Μ',
        '#' : '|aag|',
        '+' : '|aah|',
        '-' : '|aba|',
        '0' : '|abb|',
        '1' : '|abc|',
        '2' : '|abd|',
        '3' : '|abe|',
        '4' : '|abf|',
        '5' : '|abg|',
        '6' : 'ή',
        '7' : 'ί',
        '8' : '|acb|',
        '9' : 'α',
        'sus' : '|acd|',
        'add' : '|ace|',
    };

    exports.getColor = function(color) {
        var colorRendered = '';
        if (colors[color]) {
            colorRendered = colors[color];
        } else {    
            for (var character in color) {
                colorRendered += colors[color[character]];
            }
        }
        return colorRendered;
    };
});