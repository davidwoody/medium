medium
======

Add any Medium post, profile, or collection to any Meteor template in seconds.

###Example

```
http://medium.meteor.com/
```

###Add package to your project

```
mrt add medium
```

###Add `<a>` tag to your html template

Example profile tag:
```
<a class="m-profile" href="https://medium.com/@davidjwoody">David Woody</a>
```

__Class options__:
- m-profile
- m-collection
- m-story

__href__="RELATEDURL"

###Addtional options to add to the `<a>` tag:

__data-width__: allows you to set an optional width. By default, Embeds are 400px wide, however they are also responsive and will scale down as the window of a website is scaled.

```
<a class="m-profile” data-width=“100%" href=“...">David Woody</a>
```

__data-border__: allows you to toggle border visibility on an Embed. By default, Embeds will display with a border.

```
<a class="m-profile” data-border=“false” href=“...">David Woody</a>
```

__data-collapsed__: if true, post lists on Profile Embeds and Collection Embeds will be omitted, giving you smaller Profile/Collection Embed cards. By default, collapsed is false.

```
<a class="m-profile” data-collapsed=“true" href=“...">David Woody</a>
```

