# Rapi Form Wizards

Separating form into sections and has an ability to move forward and to move backward the section in sections.

### Form item types
* **string** - create an input type text element
* **multipleString** - create an input type textarea element
* **heading** - create h4 as a main header and small as sub header
* **constant** - create a label
* **method** - create a button ( ember color )
* **file** - invoke the nv-file-select widget
* **clear** - add a new line br
* **empty** - create an empty space. Take 50% of the section width
* **singleOption** - create a radio button ( will be change to "boolean" )
* **array** - create a checkbox
* **arrays** - create a group of checkboxes
* **image** - create a img element
* **table** - invoke the rapi-table-default widget
* **date** - invoke the uib-datepicker-popup
* **collection** - create a select-options element
* **collection-question** - invoke the rapi-form-dynamic-question widget
* **message** - create bootstrap alert

#### string
```sh
{
  "id": "icNo",
  "value": "871209-08-4323",
  "label": "IC No/No Pendaftaran",
  "type": "string"
}
```
#### multipleString
```sh
{
  "id": "reasonForRenting",
  "value": "Saya menyewa kerana.....",
  "label": "Tujuan Sewa",
  "type": "multipleString"
}
```
#### heading
```sh
{
  "id": "headingAssetInfo",
  "value": "MAKLUMAT ASET YANG DIPOHON",
  "label": "A.",
  "type": "heading"
}
```
#### constant
```sh
{
  "id": "name",
  "value": "Hafsa",
  "label": "Name",
  "type": "constant"
}
```
#### stringConstant
```sh
{
  "id": "123",
  "value": "Hafsa",
  "label": "Name",
  "type": 'stringConstant'
}
```
#### method
```sh
{
  "id": "daftarBtn",
  "value": "Daftar",
  "type": "method"
}
```
#### file
```sh
{
    id: 'uploadLampiranBtn',
    value: '/upload',
    label: 'Lampiran',
    type: 'file'
}
```
#### clear
```sh
{
    type: 'clear'
}
```
#### empty
```sh
{
    type: 'empty'
}
```
#### singleOption - will change to "boolean"
```sh
{
  "id": "gender",
  "value": "Gender",
  "label": "Gender",
  "type": "singleOption",
  "items": [
    {
      "id": "male",
      "value": "male",
      "label": "Male",
      "type": "singleOption"
    },
    {
      "id": "female",
      "value": "female",
      "label": "Female",
      "type": "singleOption"
    }
  ]
}
```
#### array
```sh
{
  id: 'formset1',
  items: [
    {
      id: 'isRentAsset',
      value: '',
      label: 'Aset Boleh disewakan',
      type: 'array'
    }  ,
    {
      id: 'freezeFromDevAset',
      value: '',
      label: 'Status Beku dari Pembangunan',
      type: 'array'
    }
  ]
}
```
#### arrays
```sh
{
  id: 'formset1',
  items: [
    {
      id: 'cbxs1',
      type: 'arrays',
      items: [
      {
          id: 'cbx1',
          label: 'Sistem (wajib)',
          value: '1'
      },
      {
          id: 'cbx2',
          label: 'Email',
          value: '2'
      },
      {
          id: 'cbx3',
          label: 'SMS',
          value: '3'
      } 
    ]
   }
  ]
}
```
#### image
```sh
{
    "id": "img1",
    "value": "http://my_image_url",
    "width": "50px",
    "height": "50px",
    "styles": "color:black;",
    "type": "image"
}
```
#### table
```sh
{
  "id": "section1",
  "items": [
    {
      "id": "",
      "value": "",
      "label": "",
      "type": "table",
      "items": [
        {
          "id": "tr1",
          "type": "tr",
          "value": "1234",
          "items": [
            {
              "id": "td1",
              "value": "1",
              "label": "No",
              "type": "td"
            },
            {
              "id": "td2",
              "value": "Salinan No. KP / No. Pengenalan",
              "label": "Jenis Dokumen",
              "type": "td"
            },
            {
              "id": "td3",
              "value": "yes",
              "label": "Mandatori",
              "type": "td"
            }
          ]
        }
      ],
      "labels": [
        "No.",
        "Jenis Dokumen",
        "Mandatori",
        " "
      ]
    }
  ]
}
```
#### date
```sh
{
    "id": "registerDate",
    "value": "",
    "label": "Tarikh Pendaftaran",
    "type": "date"
}
```
#### collection
```sh
{
  "id": "jajaran",
  "value": "1",
  "label": "Jajaran",
  "type": "collection",
  "items": [
    {
      "id": "j1",
      "value": "1",
      "label": "Butterworth - Johor Baharu"
    },
    {
      "id": "j2",
      "value": "2",
      "label": "Pelabuhan Kelang - Kuala Lumpur"
    }
  ]
}
```
#### collection-question
```sh
{
  "id": "q1",
  "label": "Pilihan",
  "type": "collection-question",
  "items": [
    {
      "id": "i1",
      "value": "1",
      "label": "Ya",
      "type": "question",
      "answer": {
        "id": "a1",
        "label": "No Rujukan",
        "type": "string"
      },
      "answers": [
          {
            "id": "a1",
            "label": "No Rujukan",
            "type": "string"
          },
          {
            "id": "a2",
            "label": "Tarikh Laporan",
            "type": "date"
          }
      ]
    },
    {
      "id": "i1",
      "value": "1",
      "label": "Tidak",
      "type": "question",
      "answer": {},
      "answers": []
    }
  ]
}
```
#### message
```sh
{
  "value": "FEE PENDAFTARAN PERMOHONAN YANG DIKENAKAN ADALAH RMXXX.00",
  "label": "info",
  "type": "message"
}
```

### Structure
> RapiFormWizards will adding grid classes based on length of form-items of the section.
> For example if the section contains **4** form-items, the RapiFormWizards will used 
> **3:3:3:3 grid layout**. What if we have only have **2** form-items?
> Then the RapiFormWizards will used **6:6 grid layout**. 

#### Use-case 1:
What if we have 4 form-items, the first form-item we want it take 50% width of the section?

> A: The RapiFormWizards, will give the flexibility to the layout who invoke it to do
> the styling adjustment. The RapiFormWizards already set the class for section 
> "group-<grid-type>-item" e.g. "group-4-item". And for the form-item
> "group-item-<grid-index>" e.g. "group-item-1"

How to read these grid stuff "group-4-item", "group-item-1"?

> A: For example, "group-4-item" represent the section that have **4** columns and
> each column set to be 25% ( grid-md-**4**, grid-sm-**4**, grid-xs-**4** ).
> While for "group-item-**1**", the number ( see bold ) represent the index of
> element in section.

Then how layout do the adjustment?

> A: Here is the example:
```sh
.group-3-item {
    &.group-item-1 {
        width: 25%;
    }
    &.group-item-2 {
        width: 25%;            
    }
    &.group-item-3 {
        width: 50%;
    }
}
```

> What the CSS/SCSS code above does is it used the classes set by RapiFormWizards 
> and add or overwrite the width property with new value.

### New Properties added

#### mainLabel
mainLabel representing the label. Sometimes we would like to disabled the label and just want to display the input.
```sh
var item = {
   id: key,
   type: 'stringConstant',
   mainLabel: {
      visibility: 'no'
   }
};
```
#### buttons
we will use this property to add our custom buttons next to the default buttons ( Previous|Next|Finish|Cancel ).
And the callback onClick is binded.
```sh
rapiFormWizards: {
	  name: 'rapi-form-wizards',
	  attrs: [
		  {
			name: 'form',
			value: response.data.lot.items
		  },
		  {
			name: 'buttons',
			value: [
				{
					id: 'paymentBtn',
					value: 'Terus ke proses bayaran dan daftar permohonan',
					onClick: function(e, formItem, currentForm){
					}
				}
			]
		  }
	  ]
  }
}
```
#### defaultButtonSetting
we will use this property to control the visibility of the RapiFormWizards **default** buttons.
```sh
rapiFormWizards: {
	  name: 'rapi-form-wizards',
	  attrs: [
		  {
			name: 'form',
			value: response.data.lot.items
		  },
		  {
			name: 'default-button-setting',
			value: {
				prev: {
					visibility: 'yes'
				},
				next: {
					visibility: 'yes'
				},
				finish: {
					visibility: 'no'
				},
				cancel: {
					visibility: 'no'
				}
			}
		  }
	  ]
  }
}
```
#### displayUserInput
this property is a string flag "yes/no". If "yes" the user input will be track and displayed at the end of the form.
```sh
rapiFormWizards: {
	  name: 'rapi-form-wizards',
	  attrs: [
		  {
			name: 'form',
			value: response.data.lot.items
		  },
		  {
			name: 'display-user-input',
			value: 'yes'
		  }
	  ]
  }
}
```

License
----
**Rapidevelop project**