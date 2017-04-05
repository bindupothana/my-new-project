var app = angular.module('RtxLoginApp');
app.controller('loginCtrl', function($scope,$stateparams,loginService,$state) {
    $scope.setDetails=function(){
    	var obj={
    		'userName':'projet',
    		'userPassword':'rtx123'

    	}
	var result=loginService.postName(obj)
	.success(function(data){
		var data=$.parseJSON(JSON.parse(data));
		$scope.message=data;
		$state.go("empinfo");


	})
};


});
