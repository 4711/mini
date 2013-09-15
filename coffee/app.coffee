MainController = ($scope)  ->
  $scope.frameworks = [
    {name: 'AngularJS',   url: 'angularjs.org' }
    {name: 'Ember.js',    url: 'emberjs.com'}
    {name: 'Backbone.js', url: 'backbonejs.org' }
  ]

  $scope.name = "Master"

  $scope.addFramework = ->
    $scope.frameworks.push({ name:$scope.newFramework, url: 'www.' + $scope.newFramework + '.com'})
    $scope.newFramework = ''


