Package.describe({
  summary: "Giving the Package sytste a spin",
});

Package.on_use(function (api) {
  api.use(["underscore", "templating"], "client");

  //these are the files to load on server
  api.add_files("both.js", "server");
  // this are the files to load on client 
  api.add_files(["templates.html", "client.js"], "client");
});