Template.medium.rendered = function(){
  //if script does not load
  var mediumError = function(error) {
    if (typeof console !== undefined || null) {
      console.log(error);
    }
  };

  //Create a script tag
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://static.medium.com/embed.js";
  script.onerror = mediumError;

  //Load the script tag
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
};