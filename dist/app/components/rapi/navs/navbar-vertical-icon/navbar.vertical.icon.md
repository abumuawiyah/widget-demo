Rapi UI Components
===================

Rapi navbar.tabs
-------------
###Built using :
- angular
- bootstrap

> **Note:**

> - Static polymorphism
> - Modular


#### HTML usage

```
<div class="col-md-12" 
     rapi-navbar-tabs 
     items="menu.items"
     default-selection="menu.defaultSelection"></div>
```

> **rapi-navbar-tabs** is a widget that accept 1 mandatory parameter **items**  and 1 optional parameter **default-selection** and **styles**

----------
> - **items** 
> an array of objects like roles / permissions object
> - **default-selection**
> optional parameter used by widget to display the default
> - **styles**
> flexibility for developer to perform inline styling

#### Scope

```
scope: {
   items: '=',
   defaultSelection: '=',
   styles: '='
}
```
```
//items
{
  "item1": {
    "value": "string",
    "items": [
      {
        "id": "number",
        "value": "string",
        "type": "string",
        "key": "string"
      },
      {
        "id": "number",
        "value": "string",
        "type": "string",
        "key": "string"
      }
    ]
  },
  "item2": {
    "value": "string",
    "items": [
      {
        "id": "number",
        "value": "string",
        "type": "string",
        "key": "string"
      },
      {
        "id": "number",
        "value": "string",
        "type": "string",
        "key": "string"
      }
    ]
  },
  "item3": {
    "value": "string",
    "items": [
      {
        "id": "number",
        "value": "string",
        "type": "string",
        "key": "string"
      },
      {
        "id": "number",
        "value": "string",
        "type": "string",
        "key": "string",
        "items": [
          {
            "id": "number",
            "value": "string",
            "type": "string",
            "key": "string"
          },
          {
            "id": "number",
            "value": "string",
            "type": "string",
            "key": "string"
          }
        ]
      }
    ]
  }
}
```
```
//defaultSelection
defaultSelection: {
    parent: {
        value: 'organization',
        index: 2
    },
    child: {
        value: 'completeRegistration',
        index: 0
    }
}
```
```
//styles
<div class="col-md-12" 
     rapi-navbar-tabs 
     items="[items]"
     default-selection="{defaultSelection}"
	 styles="font-weight:bold;color:blue;"></div>
```
Inline styling is useful when developer what to override the **!important**


----------

### Table of contents

[TOC]
