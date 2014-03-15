Package.describe({
  summary: "Add your Medium.com profile or collection to any Meteor template in seconds.",
});

Package.on_use(function (api) {
  // api.use("templating", "client");

  api.add_files(["medium.html", "medium.js"], "client");
});