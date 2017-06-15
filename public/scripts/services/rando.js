myApp.service('randomGif', function($http) {

	sv = this;

	sv.name = 'rando';

	sv.randomGif = function() {
		sv.searchURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&';
		$http.get(sv.searchURL).then(function(response) {
			sv.gif = response.data.data.image_url;
		});
	};
});
