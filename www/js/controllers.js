(function(global) {
  'use strict';
  
  global.angular.module('demo.controllers', ['ionic'])
    .controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
      $scope.goTo = function(page) {
        global.console.log('Going to ' + page);
        $location.path('/' + page);
      };
      $scope.$on('$locationChangeSuccess', function() {
        if ($scope.sideMenuController.isOpen()) {
          $scope.sideMenuController.close();
        }
      });
    }])
    .controller('HomeCtrl', ['$scope', '$timeout', '$ionicLoading', 'gettext', 'gettextCatalog', function($scope, $timeout, $ionicLoading, gettext, gettextCatalog) {
      $scope.leftButtons = [{
        type: 'button-icon icon ion-navicon',
        tap: function(e) {
          $scope.sideMenuController.toggleLeft();
        }
      }];
      $scope.rightButtons = [];
      $scope.showLoading = function() {
        var loading = $ionicLoading.show({
          content:  gettextCatalog.getString(gettext('Loading...')),
          showBackdrop: true,
          maxWidth: 200,
          animation: 'fade-in',
          showDelay: 500
        });
        $timeout(function(){
          loading.hide();
        }, 5000);
      };
    }])
    .controller('AboutCtrl', ['$scope', '$ionicActionSheet', '$ionicModal', 'ContactService', 'gettext', 'gettextCatalog', function($scope, $ionicActionSheet, $ionicModal, ContactService, gettext, gettextCatalog) {
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
              { text: gettextCatalog.getString(gettext('Show Modal')) },
              { text: gettextCatalog.getString(gettext('Don\'t close the menu')) }
            ],
            titleText: gettextCatalog.getString(gettext('Demo Menu')),
            destructiveText: gettextCatalog.getString(gettext('Delete')),
            cancelText: gettextCatalog.getString(gettext('Cancel')),
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
