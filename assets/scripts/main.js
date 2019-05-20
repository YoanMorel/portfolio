var myPortfolio = angular.module('myPortfolio', ['ngRoute']);

myPortfolio
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/partials/index.html',
        controller: 'allCategories'
      })
      .when('/:category', {
        templateUrl: 'assets/partials/byCategory.html',
        controller: 'byCategory'
      })
      .otherwise({
        redirectTo: '/'
      })
  }])
  .run(['$rootScope', '$http', function($rootScope, $http){
    $rootScope.bdd;
    $http.get('bdd.json')
    .then(function(response){
      $rootScope.bdd = response.data;
    });
  }])
  .controller('navBar', ['$scope', function($scope){
    
  }])
  .controller('allCategories', ['$scope', '$rootScope', function($scope, $rootScope){

  }])

// $(function() {
//   $('a.nav-link').click(function() {
//     if (!$(this).hasClass('active')) {
//       $('a.nav-link').each(function(index) {
//         $(this).removeClass('active');
//       });
//       $(this).addClass('active');
//     }
//
//     if ($(this).attr('data-site-type')) {
//       var dataType = $(this).attr('data-site-type');
//       $('div.imgContainer').each(function(index) {
//         if ($(this).attr('data-site-type') != dataType) {
//           $(this).fadeOut(500);
//         } else {
//           $(this).fadeIn(500);
//         }
//       });
//     } else {
//       $('div.imgContainer').fadeIn(500);
//     }
//   });
//
//   $('.img, .imgMiddleText').click(function() {
//     var target = $('.img').attr('src');
//     $('#popOver').fadeIn(500).css({
//       display: 'flex'
//     }).prepend('<img src="' + target + '" alt="Image Popup" class="popup" />').click(function() {
//       $(this).fadeOut(500);
//       $(this).empty();
//     });
//   });
// });
