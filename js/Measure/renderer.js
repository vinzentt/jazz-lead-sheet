define(['jquery'], function($){
	return function(measureObj) {
		console.log(measureObj);
		return $('<div class="chord"></div>').text(measureObj.root + measureObj.color);
	};
});