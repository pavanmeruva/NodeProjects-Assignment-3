var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){console.log("Hello world from controller")

var refresh = function(){
	$http.get('/tasklist').success(function(response){
	console.log("I got the data i requested");
	$scope.tasklist=response;
	$scope.task = "";
	
	});
};
refresh();

$scope.addTask = function(){
console.log($scope.task);
$http.post('/tasklist',$scope.task).success(function(response){
 console.log(response);
refresh();
});

};

$scope.remove = function(id) {
	console.log(id);
	$http.delete('/tasklist/'+ id).success(function(response){
	refresh();
	});
};

$scope.edit = function(id) {
	console.log(id);
	$http.get('/tasklist/' + id).success(function(response){
	$scope.task = response;
	});

};

$scope.update = function(){
console.log($scope.task._id);
$http.put('/tasklist/'+ $scope.task._id, $scope.task).success(function(response){
refresh();
})
};

$scope.deselect=function(){
	$scope.task="";
}
}]

);