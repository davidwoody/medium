medium
======

Add your Medium.com profile or a collection to any Meteor template in seconds.

###Add package to your project

- Navigate to your projects directory in Terminal: cd PROJECTDIRECTORY
- Add this package: mrt add medium

###Add Medium template

- Add the medium template to your template: {{>medium}}
- Wrap the medium template in a {{#with}} block helper: {{#with}} {{>medium}} {{/with}}
- Give the {{#with}} block helper a context: {{#with context}}
- Add a template helper with 

Example: 

```
Template.YOURTEMPLATENAME.helpers({
  context: function(){
    return {
      type: "m-profile",
      url: "https://medium.com/@davidjwoody",
      width: "100%",
      border: "false",
      collapsed: "false"
    }
  }
});
```

###Details

The "type" key can either be a Medium profile ("m-profile") or a Medium collection ("m-collection").

The "url" key should either be your Medium profile URL, or the Medium collection URL.

The "width" key takes a percentage as its value.

The "border" and "collapsed" keys can be set to either true or false. 
