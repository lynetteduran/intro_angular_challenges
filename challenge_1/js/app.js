console.log('challenge #1 -- app.js loaded!');

var app = angular.module("dayOneExampleApp", []);
app.controller("WelcomeController", WelcomeController);
// nothing to see here!

function WelcomeController() {
	var vm = this;
	vm.name = "foo";
}