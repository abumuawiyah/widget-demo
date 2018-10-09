# Rapi Common Page

Reusable component that can be displayed varieties of UI ( modal, popup, page etc..)
Currently we are only support modal.

### Handler - renderAs
* **button** - the handler will be displayed as a button
* **link** - the handler will be displayed as a link

### UI - outputAs
* **modal** - the common page will be displayed as a modal

#### JSON Structure that the widget accept
```sh
data = {
    "id": "1",
    "value": "A00092b",
    "label": "A00092b",
    "common": {
        "type": "asset",
        "label": "Maklumat Aset"
    }
}
```

#### How to invoke the widget
```sh
<div rapi-common-page 
     render-as="link" 
     output-as="modal" 
     label="Click me!"
     data="data">
</div>
```
##### Invocation above will:
* Render the handler as a link with the text "Click me!"
* When we click the link, it will popping out the modal
* Injected the data ( data is the context of the clicked object ) to the widget
* data.value - Mandatory property as the widget will used it to append to route (/:id)
* data.common.type - Mandatory property as it will get the common page based on type
* data.common.label - Cosmestic

> **Important**: data.value is super important as it will be route key #/asset/:key ( key = data.value )
> sample - http://localhost:3000/#/main/asset/pelupusan/pelupusanasset

### Steps
* Click on "cari" button
* Observed the table list appeared
* Click on Id Asset column data link

License
----
**Rapidevelop project**