Rapi UI Components
===================

Rapi navbar.header
-------------
###Built using :
- angular
- bootstrap

#### HTML usage
```
<div rapi-navbar-header 
     class="col-md-12"
     items="[items]" 
     organization="{organization}">
</div>
```

> **rapi-navbar-header** is a widget that accept 2 mandatory parameters **items** and **organization**. And 1 optional parameter **styles**

----------
> - **items** 
> an array of objects
> - **organization** 
> object that contains icon and text
> -  **styles**
> flexibility for developer to perform inline styling

#### Scope

```
scope: {
  items: '=',
  organization: '=',
  styles: '='
}
```
```
//data
{
  "organization": {
    "brand": {
      "icon": {
        "value": "glyphicon-calendar",
        "type": "font"
      },
      "value": "monthley"
    }
  },
  "items": [
    {
      "icon": {
        "value": "glyphicon-user",
        "type": "font"
      },
      "value": "Profile"
    },
    {
      "icon": {
        "value": "glyphicon-cog",
        "type": "font"
      },
      "value": "Setting"
    }
  ]
}
```
Inline styling is useful when developer what to override the **!important**


----------

### Table of contents

[TOC]
