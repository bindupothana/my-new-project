var app = angular.module('RtxLoginApp');

app.service('loginService', function($http) {

  
   this.postName=function(credentials){
   	var result=$http.post('api-qa.retrotax-aci.com/authentication/', credentials)
   	.success(function(data){
   		result=(data);

   	})
   	.error(function(){
   		alert("wrong");

   	});
   	return result;
   }

    this.getNewEmployee=function(){
   	var newEmp=$http.get('api-qa.retrotax-aci.com/authentication/')
   }
  

});
