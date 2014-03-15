if (Meteor.isClient){
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = "https://static.medium.com/embed.js";

// //Load the script tag
// var head = document.getElementsByTagName('head')[0];
// head.appendChild(script);

Template.mytemp.helpers({
  context: function(){
    return {
      type: "m-profile",
      url: "https://medium.com/@davidjwoody",
      width: "100%",
      border: "false",
      collapsed: "false"
    };
  }
});


}

