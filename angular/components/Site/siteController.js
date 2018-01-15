angular.module('MainApplication').controller('SiteController', function ($scope, $stateParams, $state, SiteDataFactory, DataFactory, LoaderFactory, ErrorFactory) {
    LoaderFactory.SetState(true);
});

