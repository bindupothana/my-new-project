'use strict';

/**
 * @ngdoc overview
 * @name RtxLoginApp
 * @description
 * # RtxLoginApp
 *
 * Main module of the application.
 */
var app =angular.module('RtxLoginApp', [ 
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
 app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("login", {
        url:"/login",
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        // controllerAs: 'login'
      })
      .state("empinfo", {
        url:"/empinfo",
        templateUrl: 'views/empinfo.html',
        controller: 'loginCtrl',
      })
       .state("newemp", {
        url:"/newemp",
        templateUrl: 'views/newemp.html',
        controller: 'loginCtrl',
      })

      // .otherwise({
      //   redirectTo: '/'
      // });



 
 $urlRouterProvider.otherwise('/login');

 

  });
