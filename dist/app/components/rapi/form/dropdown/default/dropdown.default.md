Rapi UI Components
===================

Rapi form.dropdown.default
-------------
###Built using :
- angular
- bootstrap

#### HTML usage
```
<div anboot-form-dropdown-default 
     ng-switch-when="collection"
     items="[items]">
</div>
```

> **rapi-form-dropdown-default** is a widget that accept 1 mandatory parameter **items** and 2 optional parameter **label** and **styles**

----------
> - **items**
> an array of object
> - **label**
> String value that will be displayed as a default dropdown value
> - **styles**
> flexibility for developer to perform inline styling

#### Scope

```
scope: {
  items: '=',
  label: '@',
  styles: '='
}
```
```
{
  "items": [
    {
      "id": "number",
      "value": "string",
      "label": "string",
      "type": "string"
    },
    {
      "id": "number",
      "value": "string",
      "label": "string",
      "type": "string"
    }
  ]
}
```
Inline styling is useful when developer what to override the **!important**


----------

### Table of contents

[TOC]
