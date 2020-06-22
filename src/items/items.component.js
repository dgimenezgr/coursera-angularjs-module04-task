(function () {
    'use strict';
    
      angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/items/category-items.html',
            bindings: {
                list: '<'
            }
      });

})();
