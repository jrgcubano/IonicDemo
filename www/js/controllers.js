(function(global) {
  'use strict';
  
  global.angular.module('demo.controllers', ['ionic'])
    .controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
      $scope.goTo = function(page) {
        global.console.log('Going to ' + page);
        $scope.sideMenuController.toggleLeft();
        $location.path('/' + page);
      };
      $scope.goTo2 = function(page) {
        global.console.log('Going to ' + page);
        $location.path('/' + page);
      };
    }])
    .controller('HomeCtrl', ['$scope', '$timeout', '$ionicLoading', function($scope, $timeout, $ionicLoading) {
      $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
          $scope.sideMenuController.toggleLeft();
        }
      }];
      $scope.rightButtons = [];
      $scope.showLoading = function() {
        var loading = $ionicLoading.show({
          content: 'Loading...',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 500
        });
        $timeout(function(){
          loading.hide();
        }, 5000);
      };
    }])
    .controller('AboutCtrl', ['$scope', '$ionicActionSheet', '$ionicModal', 'ContactService', function($scope, $ionicActionSheet, $ionicModal, ContactService) {
      function loadContacts() {
        $scope.contacts = ContactService.getContacts(50);
        $scope.$broadcast('scroll.refreshComplete');
      }
      $ionicModal.fromTemplateUrl('modal.html', function(modal) {
        $scope.modal = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      });
      $scope.contacts = [];
      loadContacts();
      $scope.reloadContacts = function() {
        loadContacts();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
          $scope.sideMenuController.toggleLeft();
        }
      }];
      $scope.rightButtons = [{
        type: 'button-icon icon ion-plus-round',
        tap: function(e) {
          $ionicActionSheet.show({
            buttons: [
              { text: 'Show Modal' },
              { text: 'Don\'t close the menu' }
            ],
            titleText: 'Demo Menu',
            destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function() {
              console.log('Canceled');
            },
            buttonClicked: function(index) {
              console.log('Button ' + index + ' clicked');
              if (index === 0) {
                $scope.modal.show();
                return true;
              }
              else if (index === 1) {
                return false
              }
              return true;
            },
            destructiveButtonClicked: function() {
              console.log('Deleted clicked');
              return true;
            }
          });
        }
      }];
    }])
    .controller('SlideBoxCtrl', ['$scope', function($scope) {
      $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
          $scope.sideMenuController.toggleLeft();
        }
      }];
      $scope.rightButtons = [];
    }]);
})(this);