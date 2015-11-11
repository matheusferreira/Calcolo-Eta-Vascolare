# Calcolo-Eta-Vascolare
Ionic application that calculates the vascular age

This app was created as a contribution for a project of the university of Lucca. 
[Link to the project](http://sysma.imtlucca.it/vascularage/#form)

<img src="https://github.com/matheusferreira/Calcolo-Eta-Vascolare/blob/master/repository-images/Android%20device%20test.png?raw=true" width="250x">

To build this code and deploy it for Android or iOS device you must follow the [guide from the Ionic platform](http://ionicframework.com/getting-started/) and install it.

After Ionic is instaled you can clone this repository and open its path in the terminal and run the following commands:
```terminal
$ ionic platform add ios
```
or
```terminal
$ ionic platform add android
```

You must have the SDKs from each platform configurated in your development environment, you can find guides from the Ionic documentation:
[Android Guide](http://cordova.apache.org/docs/en/3.4.0/guide/platforms/android/index.html#Android%20Platform%20Guide) and [iOS Guide](http://cordova.apache.org/docs/en/3.4.0/guide/platforms/ios/index.html#iOS%20Platform%20Guide)

Then you can simulate using the iOS simulator:
```terminal
$ ionic simulate ios
```
Or even deploy to a Android (you must connect a device in USB with development mode activated) using:
```terminal
$ ionic run android
```

After you test the deployment of the App, you can code the function that calculate the vascular age in the file controllers.js under the calculate() function:

```javascript
$scope.calculate = function(){
    $scope.warning = false;
    //check if all fields have content:
    if($scope.fields.age && $scope.fields.systolic && $scope.fields.cholesterol){
      console.log("Fields values: " + JSON.stringify($scope.fields));
      //calculate and set the result in the two variables: $scope.results.vascular and $scope.results.risk. The value will be updated in the view automatically.
      ..
      ..
      
      $scope.results.vascular = "result";
      $scope.results.risk = "result 2"
    }
    else{
      console.log("Error: one or more fields are blank!");
      $scope.warning = true; //show a warning message in the view. 
    }
  }
```
