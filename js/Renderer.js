define(['underscore', 'Font', '$lsheet', 'Measure/Renderer', 'text!config/scales.json'], function(_, font, $lsheet, measureRenderer, scalesTxt){
	
	var scales = JSON.parse(scalesTxt);
	var self = {};

	function Renderer(key) {
		self.scale = scales[key];

		var _prepareChord = function(chord){
			if (chord.root !== '%') {
				chord.root = font.getChordRoot(self.scale[chord.root]);
			}
			if (chord.color) {
				chord.color = font.getColor(chord.color);
			}
			if (chord.bass) {
				chord.bass = self.scale[chord.bass];
			}
			return chord;
		};

		this.render = function(lsheetObj){
			$lsheet.empty();
			lsheetObj.forEach(function(row){
				var $row = $('<div class="lsheetRow"></div>');	
				row.forEach(function(measure){
					measure = _.map(measure, _prepareChord);
					$row.append(measureRenderer(measure));
				});
				$lsheet.append($row);
			});
		};
	}

	return Renderer;
});