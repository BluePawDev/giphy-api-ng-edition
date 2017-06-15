var myApp = angular.module('myApp', []);


// START HttpController
myApp.controller('HttpController', function($http, randomGif) {

	var vm = this;

	vm.search = [];


	// START newSearch
	vm.newSearch = function(string) {
		vm.searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + string + '&api_key=dc6zaTOxFJmzC';
		$http.get(vm.searchURL).then(function(response) {
			for (var i = 0; i < response.data.data.length; i++) {
				vm.gifs = response.data.data[i].images.downsized.url;
				vm.search.push(vm.gifs);
			}
			console.log(vm.search);
		});
	}; // END newSearch


	// // START random
	// vm.random = function() {
	// 	console.log('random clicked');
	// 	vm.searchURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&';
	// 	$http.get(vm.searchURL).then(function(response) {
	// 		vm.gif = response.data.data.image_url;
	// 		console.log(response);
	// 	});
	//
	// }; // END random

	vm.random = function() {
		console.log('rand');
	}




}); // END HttpController
