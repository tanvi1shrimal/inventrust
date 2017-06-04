// Module(s)
angular.module("inventrust", ['ngTagsInput'])  
 
 .controller('messageCtrl', ['$scope','$http', function( $scope, $http ){
  $scope.tags = [ 
            { text: 'Suresh Patidar' } 
          ];
   
   $scope.loadTags = function(query) {
     // return $http.get('http://103.15.66.186/webdesign/546-Inventrust/assets/app/json/tags.js'); 
      return $http.get('http://localhost/546-inventrust-html/HTML/assets/app/json/tags.js'); 
    }; 

  
//New Message To

  $scope.tagsto = [];
  
  $scope.loadFriendslist = function($query) {
   // return $http.get('http://103.15.66.186/webdesign/546-Inventrust/assets/app/json/friendslist.js', { cache: true}).then(function(response) {
    return $http.get('http://localhost/546-inventrust-html/HTML/assets/app/json/friendslist.js', { cache: true}).then(function(response) {
      
      var friendsList = response.data;
      return friendsList.filter(function(flist) {
        return flist.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
      });
    });
  }; 

}])
 