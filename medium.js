//onLoad
var mediumPackageOnLoad = function(){
  if (typeof console !== 'undefined') {
    console.log('medium package loaded');
  }
};

//if script does not load
var mediumPackageError = function(error) {
  if (typeof console !== 'undefined') {
    console.log(error);
  }
};

//Create a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://static.medium.com/embed.js';
script.onload = mediumPackageOnLoad;
script.onerror = mediumPackageError;

//Load the script tag
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);