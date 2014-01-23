(function(global) {
  'use strict';

  global.angular.module('demo.services', [])
    .factory('ContactService', [function() {
      return {
        getContacts: function(count) {
          var contacts = [];
          for (var i = 0; i < count; i++) {
            contacts.push({ name: "John Doe #" + Math.floor((Math.random() * count) + 1)});
          }
          return contacts;
        }
      };
    }]);
})(this);