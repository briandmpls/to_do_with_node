/**
 * Created by briandaves on 10/10/15.
 */
var app = angular.module('todo', []);

app.controller('MainController', ['$scope', function($scope) {

    // Establish empty array of objects
    $scope.toDoList=[];


    //Count number of objects in list
    $scope.totalToDoList = function(){
        return $scope.toDoList.length;
    };

    //Add new input onto DOM list and Reinitialize list
    $scope.addNewItem = function () {
        if($scope.here === "goodbye") {
            $scope.here = "here";
            $scope.toDoList = [];
            console.log("New Item Added");
        }
        $scope.toDoList.push({text:$scope.newToDoItem, done:false});
        $scope.newToDoItem = '';
    };

    //Remove old list
    $scope.newList = function() {
        $scope.here = "goodbye";
        console.log("Goodbye");
    };




    // Remove item that is completed from list
    $scope.removeItem = function () {
        for(var it = 0; it < $scope.toDoList.length; it++){
            //If it is checked done
            if($scope.toDoList[it].done) {
                $scope.toDoList.splice(it,1);
                console.log("Item removed")
            }
        }
    };

}]);
