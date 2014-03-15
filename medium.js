// //Functions to run after the script tag has loaded
// var filepickerLoadCallback = function(){
//     filepicker.setKey("AjorSRx9lTymovclXk9Ujz");
// };

// //If the script doesn't load
// var filepickerErrorCallback = function(error){
//     if(typeof console != undefined) {
//         console.log(error);
//     }
// };

// //Generate a script tag
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = '//api.filepicker.io/v1/filepicker.js';
// script.onload = filepickerLoadCallback;
// script.onerror = filepickerErrorCallback;

// //Load the script tag
// var head = document.getElementsByTagName('head')[0];
// head.appendChild(script);


// MY CODE
if (Meteor.isClient){
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://static.medium.com/embed.js";

//Load the script tag
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);

Template.mytemp.helpers({
  context: function(){
    return {
      type: "m-profile",
      url: "https://medium.com/@davidjwoody",
      width: "100%",
      border: "false"
    };
  }
});


}




// <script async src="https://static.medium.com/embed.js"></script>
