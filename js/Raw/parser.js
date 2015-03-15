define(function(require, exports){

	var _parseChord = function(chordTxt, chord, measure){
		measure[chord] = {
			raw:chordTxt,
			parenthesis: false,
			root: '',
			color: ''
		};
		measure[chord].raw = chordTxt;
        if (chordTxt === "%") {
            measure[chord].root = chordTxt;
        } else {
    		if (chordTxt.indexOf('(') !== -1)
    		{
    			measure[chord].parenthesis = true;
    			chordTxt = chordTxt.replace(/\((.*?)\)/i, '$1');
    		}
    		//extract bass if needed
            if (chordTxt.split('/').length === 2){
            	measure[chord].bass = chordTxt.split('/')[1];
            	chordTxt = chordTxt.split('/')[0];
            } 
            if (chordTxt.split('_').length === 2){
            	measure[chord].root = chordTxt.split('_')[0];
            	measure[chord].color = chordTxt.split('_')[1];
            } else {
            	measure[chord].root = chordTxt;
            }
        }
	};

	exports.parse = function(raw){
		var parsedArr = raw.split('\n');
		parsedArr.forEach(function(lineTxt, line){
			parsedArr[line] = lineTxt.split('|');
			parsedArr[line].forEach(function(measureTxt, measure){
				parsedArr[line][measure] = measureTxt.split(' ');
				parsedArr[line][measure].forEach(_parseChord);
			});
		});
		return parsedArr;
	};
});