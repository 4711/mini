var MainController;

MainController = function($scope) {
  $scope.frameworks = [
    {
      name: 'AngularJS',
      url: 'angularjs.org'
    }, {
      name: 'Ember.js',
      url: 'emberjs.com'
    }, {
      name: 'Backbone.js',
      url: 'backbonejs.org'
    }
  ];
  $scope.name = "Master";
  return $scope.addFramework = function() {
    $scope.frameworks.push({
      name: $scope.newFramework,
      url: 'www.' + $scope.newFramework + '.com'
    });
    return $scope.newFramework = '';
  };
};
