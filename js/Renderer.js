define(['$lsheet', 'Measure/Renderer'], function($lsheet, chordRenderer){
	return {
		render: function(lsheetObj){
			$lsheet.empty();
			lsheetObj.forEach(function(row){
				var $row = $('<div class="row"></div>');	
				row.forEach(function(measures){
					var $measure = $('<div class="cell"></div>');
					measures.forEach(function(chord){
						$measure.append(chordRenderer(chord));
					});
					$row.append($measure);
				});
				$lsheet.append($row);
			});
		}
	};
})