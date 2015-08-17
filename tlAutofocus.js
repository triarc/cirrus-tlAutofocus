var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        angular.module("tlAutofocus", []).directive('autofocus', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element) {
                    $timeout(function () {
                        $element[0].focus();
                    });
                }
            };
        }]);
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

