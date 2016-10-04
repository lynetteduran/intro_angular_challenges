console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController() {
  var vm = this;
  vm.full_name = "Lynette Durán";
  vm.age = "nobody's biz";
  vm.city = "All of ";
  vm.state = "California";
  vm.name_length = vm.full_name.length;
  vm.shout = function() {
  	return vm.full_name.toUpperCase() + "!";
  }
}

function ClassController() {
  var vm = this;
  vm.class_name = "GAIA";
  vm.enrolled_students = "12";
  vm.start_date = "September 6, 2016";
  vm.end_date = "November 30, 2016";
  vm.daysRemaining = function() {
  	return "Many";
  }
}