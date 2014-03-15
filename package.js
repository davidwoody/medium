Package.describe({
  summary: "Add your Medium.com profile or collection to any Meteor template in seconds.",
});

Package.on_use(function (api) {
  api.add_files('medium.js', 'client');
});