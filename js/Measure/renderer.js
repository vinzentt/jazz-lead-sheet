define(['jquery'], function($){

	function Measure(chords) {
        this.chords = [];
        this.$measure = $('<div class="cell"></div>');
        this.$chord = $('<div class="chord"></div>'); 
        chords.forEach(_renderChord, this);

        return this.$measure.append(this.chords);
    }

    var _renderChord = function(chordObj){
        var text = chordObj.root;
        if (chordObj.color) {
            text += chordObj.color;   
        }
        if (chordObj.bass) {
            text += '/' + chordObj.bass;
        }
        this.chords.push(this.$chord.clone().text(text));
    };


    return Measure;
});