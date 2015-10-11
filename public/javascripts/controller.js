/**
 * Created by briandaves on 10/10/15.
 */
var app = angular.module('todo', []);

app.controller('MainController', ['$scope', '$http', function($scope,$http) {

    // Establish empty array of objects
    $scope.toDoList=[];
    console.log("Hello");

    //Count number of objects in list
    $scope.totalToDoList = function(){
        return $scope.toDoList.length;
    };

    //Add new input onto DOM list and Reinitialize list
    $scope.addNewItem = function () {
        console.log("hey");
        if($scope.here == "goodbye") {
            $scope.here = "here";
            $scope.toDoList = [];
            console.log("New Item Added");
        }

        $scope.toDoList.push({text:$scope.newToDoItem, done:false});
        console.log($scope.toDoList);
        $scope.newToDoItem = '';

        var data = $scope.toDoList;

        $http.post('/todo/addToDos', data).then(function (newdata){
                console.log("todo route");
                console.log(newdata);
                $scope.list = newdata.data;
            });






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
