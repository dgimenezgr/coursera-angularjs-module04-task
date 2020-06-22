(function () {
    'use strict';
    
    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        var itemsCtrl = this;
        itemsCtrl.shortName = items.short_name
        itemsCtrl.categoryName = items.name;
        itemsCtrl.items = items.menu_items;

    }
    
})();
    