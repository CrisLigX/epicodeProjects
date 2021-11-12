var app = angular.module('trivialCode', ['ngRoute']);

app.config(function ($routeProvider){

    // window.addEventListener('popstate', function (event) {
    //     location.reload();
    // });

    $routeProvider.when('/', {templateUrl:'login.html'}) 
    .when('/contatti', {templateUrl:'contatti.html'})
    .when('/home', {templateUrl:'home.html'})
    .when('/quizA01', {templateUrl:'assets/root/quizA01.html'})
    .when('/quizA02', {templateUrl:'assets/root/quizA02.html'})
    .when('/quizA03', {templateUrl:'assets/root/quizA03.html'})
    .when('/quizA04', {templateUrl:'assets/root/quizA04.html'})
    .when('/quizA05', {templateUrl:'assets/root/quizA05.html'})
    .when('/quizB01', {templateUrl:'assets/root/quizB01.html'})
    .when('/quizB02', {templateUrl:'assets/root/quizB02.html'})
    .when('/quizB03', {templateUrl:'assets/root/quizB03.html'})
    .when('/quizB04', {templateUrl:'assets/root/quizB04.html'})
    .when('/quizB05', {templateUrl:'assets/root/quizB05.html'})
    .when('/quizC01', {templateUrl:'assets/root/quizC01.html'})
    .when('/quizC02', {templateUrl:'assets/root/quizC02.html'})
    .when('/quizC03', {templateUrl:'assets/root/quizC03.html'})
    .when('/quizC04', {templateUrl:'assets/root/quizC04.html'})
    .when('/quizC05', {templateUrl:'assets/root/quizC05.html'})
});

// app.controller('controllerJson', function () {
    // $http.get('assets/js/quiz.json').then(function (response) {
    //     $scope.datijson = response.data.quizA;
    //     $scope.datijson2 = response.data.quizB;
    //     $scope.datijson3 = response.data.quizC;
    // });
// })