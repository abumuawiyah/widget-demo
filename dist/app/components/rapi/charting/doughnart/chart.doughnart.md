Rapi UI Components
===================

Rapi chart.doughnart
-------------
###Built using :
- angular
- bootstrap
- chartJS
- tc-angular-chartjs


#### HTML usage
- Used **with** Base Widget
```
<div class="col-md-6 col-sm-6" base-default
	directive="directives.rapiChartDoughnart" 
	header="{ name: 'Chart' }">
</div>
```

- Used **without** Base Widget
```
<div rapi-chart-doughnart
	chart={chart}
	styles="<inline styling>">
</div>
```

> **rapi-chart-doughnart** is a widget that accept 1 mandatory parameter **chart** and 1 optional parameter **styles**

----------
> - **chart** 
> object that contains chart specs
> - **styles**
> flexibility for developer to perform inline styling

#### Scope

```
scope: {
  chart: '=',
  styles: '='
}
```
```
{
  "id": "assets",
  "label": "",
  "items": [
    {
      "id": "item1",
      "value": 1,
      "type": "secondaryPurple",
      "label": "Key Index"
    },
    {
      "id": "item2",
      "value": 3,
      "type": "primaryPurple",
      "label": "Key Index"
    }
  ],
  "figure": {
    "label": "items",
    "value": "4"
  },
  "attentions": {
    "items": []
  },
  "links": {
    "items": []
  }
}
```
Inline styling is useful when developer what to override the **!important**


----------

### Table of contents

[TOC]
