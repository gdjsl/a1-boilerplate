angular.module('MainApplication').controller('HomeController', function ($scope, $stateParams, $state, HomeDataFactory, DataFactory, LoaderFactory, ErrorFactory) {
    LoaderFactory.SetState(false);
    console.log($state);
});

