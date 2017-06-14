var myApp = angular.module('myApp', []);


// START HttpController
myApp.controller('HttpController', function($http) {
	var vm = this;

	// START startUp
	vm.startUp = function() {
		console.log('from startUp function');
		vm.random();
	}; // END startUp


	// START newSearch
	vm.newSearch = function(string) {
		var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + string + '&api_key=dc6zaTOxFJmzC';
		console.log(searchURL);
		// console.log(search);
		$http.get('/', searchURL).then(function(response) {
			console.log('return:', response);
		});
	}; // END newSearch


	// START random
	vm.random = function() {
		console.log('random clicked');
	}; // END random


}); // END HttpController
