/* DIRECTIVES */
var appDirectives = angular.module('AppDirectives', []); //
appDirectives.directive('ngRightClick', function ($parse) {
    return function (scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope, {
                    $event: event
                });
            });
        });
    };
});

appDirectives.directive("styleSetter", function () {
    return {
        restrict: 'A',
        scope: {
            heightInPercent: '=',
            widthInPercent: '=',
            minheightInPercent: '=',
            minwidthInPercent: '=',
            fontInPercent: '=',
            margin: '=',
            padding: '='
        },
        replace: true,
        link: function (scope, element, attrs) {
            if (scope.heightInPercent !== undefined) {
                $(element[0]).css("height", scope.heightInPercent.toString() + "%");
            }
            if (scope.widthInPercent !== undefined) {
                $(element[0]).css("width", scope.widthInPercent.toString() + "%");
            }
            if (scope.minheightInPercent !== undefined) {
                $(element[0]).css("min-height", scope.minheightInPercent.toString() + "%");
            }
            if (scope.minwidthInPercent !== undefined) {
                $(element[0]).css("min-width", scope.minwidthInPercent.toString() + "%");
            }
            if (scope.fontInPercent !== undefined) {
                $(element[0]).css("font-size", scope.fontInPercent.toString() + "%");
            }
            if (scope.margin !== undefined) {
                $(element[0]).css("margin", scope.margin);
            }
            if (scope.padding !== undefined) {
                $(element[0]).css("padding", scope.padding);
            }
        }
    }

});

appDirectives.directive("loader", function ($window) {
    return {
        restrict: 'E',
        templateUrl: "angular/master/loader.html",
        replace: false,
        scope: {},
        link: function (s, e, a) {
        }
    }
});
