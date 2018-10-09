Rapi UI Components
===================

Rapi navbar.footer
-------------
###Built using :
- angular
- bootstrap

#### HTML usage
```
<div rapi-navbar-footer 
     class="col-md-12"
     items="[items]"
     organization="{organization}">
</div>
```

> **rapi-navbar-footer** is a widget that accept 2 mandatory parameters **items** and **organization**. And 1 optional parameter **styles**

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
        "value": "glyphicon-copyright-mark",
        "type": "font"
      },
      "value": "2015 - 2016"
    }
  },
  "items": [
    {
      "route": "",
      "value": "Monthley",
      "type": "link"
    },
    {
      "route": "privacy",
      "value": "Privacy Policy",
      "type": "link"
    },
    {
      "route": "terms",
      "value": "Terms & Conditions",
      "type": "link"
    },
    {
      "route": "help",
      "value": "Help",
      "type": "link"
    }
  ]
}
```
Inline styling is useful when developer what to override the **!important**


----------

### Table of contents

[TOC]
