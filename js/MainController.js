app.controller('MainController', ['$scope', function($scope) { 
  $scope.projects=[
      {
        url:'projects/exchange/index.html',
        image:'images/exchange-preview.png',
        title: 'Pelo mundo',
         description:'Its a project with many pictures taken during my exchange, I have made use of Carousel (Bootsrap) on it.'
         },

        {
        url:'projects/google-map-voice-search/my-element.html',
        image:'images/voice-search.png', 
        title: 'Google Map Voice Search', 
        description:'Its my first work with Web Components. When declared, this component can search for places on the web using voice detection'
        },

        {
        url:'projects/contact/contact.html',
        image:'images/contact.png', 
        title: 'Contact me Form', 
        description:'Its the project of a form using webcomponents'
        }
      ]}
]);

