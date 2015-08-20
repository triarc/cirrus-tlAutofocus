var Triarc;
(function (Triarc) {
    var Web;
    (function (Web) {
        angular.module("tlAutofocus", []).directive('tlAutofocus', ['$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function ($scope, $element) {
                    $timeout(function () {
                        $element[0].focus().select();
                    });
                }
            };
        }]);
    })(Web = Triarc.Web || (Triarc.Web = {}));
})(Triarc || (Triarc = {}));

