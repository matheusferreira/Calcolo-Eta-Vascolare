angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  //initializing fields values
  $scope.fields = {
    gender: 0,
    age: null,
    smoking: 1,
    systolic: null,
    cholesterol: null
  };

  $scope.results = {
    vascular: null,
    risk: null
  }
  
  $scope.calculate = function(){
    $scope.warning = false;
    //check if all fields have content:
    if($scope.fields.age && $scope.fields.systolic && $scope.fields.cholesterol){
      console.log("Fields values: " + JSON.stringify($scope.fields));
      //calculate and set the result in the two variables: $scope.results.vascular and $scope.results.risk. The value will be updated in the view automatically.
      $scope.results.vascular = "result";
      $scope.results.risk = "result 2"
    }
    else{
      console.log("Error: one or more fields are blank!");
      $scope.warning = true; //show a warning message in the view. 
    }
  }

})


.controller('AboutCtrl', function($scope) {
});
