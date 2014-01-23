(function(global) {
    'use strict';
    
    global.angular.module('demo', ['ionic', 'demo.controllers', 'demo.services'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            });
            
            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            });

            $stateProvider.state('slide-box', {
                url: '/slide-box',
                templateUrl: 'templates/slide-box.html',
                controller: 'SlideBoxCtrl'
            });
            
            $urlRouterProvider.otherwise('/home');
        });
})(this);