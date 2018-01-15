angular.module('MainApplication').controller('TemplateController', function ($scope, $state, TemplateDataFactory, DataFactory, LoaderFactory) {
    LoaderFactory.SetState(false);
});

