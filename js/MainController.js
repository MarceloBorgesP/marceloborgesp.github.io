app.controller('MainController', ['$scope', function($scope) { 
  $scope.projects=[
      {
        url:'Portfolio/projects/exchange/index.html',
        image:'Portfolio/images/exchange-preview.png',
        title: 'Pelo mundo',
         description:'Its a project with many pictures taken during my exchange, I have made use of Carousel (Bootsrap) on it.'
         },

        {
        url:'Portfolio/projects/google-map-voice-search/my-element.html',
        image:'Portfolio/images/voice-search.png', 
        title: 'Google Map Voice Search', 
        description:'Its my first work with Web Components. When declared, this component can search for places on the web using voice detection'
        },

        {
        url:'Portfolio/projects/contact/contact.html',
        image:'Portfolio/images/contact.png', 
        title: 'Contact me Form', 
        description:'Its the project of a form using webcomponents'
        },

        {
        url:'Portfolio/projects/GuestList/index.html',
        image:'Portfolio/images/guest-list.png', 
        title: 'Guest List', 
        description:'A guest list using local storage and AngularJS'
        }
      ]}
]);

