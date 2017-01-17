# ember-select-tag

ember-select-tag is a basic `<select>` component which strives to replace the old `{{view 'select'}}` while following the modern ember paradigm of "data-down-actions-up" as closely as possible.

## Demo

coming soon

## Installation

* npm install ember-select-tag

## Using the addon

A straight replacement of the old select view would be done in the following way.

The following handlebars markup

```handlebars
{{view "select"
       content=programmers
       optionValuePath="content.id"
       optionLabelPath="content.firstName"
       value=selectedProgrammerId}}
```

can be replaced with

```handlebars
  {{select-tag content=programmers
                optionValue='id'
                optionLabel='firstName'
                value=selectedProgrammerId)}}
```

### Using attribute bindings

The following attribute bindings are supported: `disabled`


### Nesting is supported

The following syntax for label and value paths is supported and will work.

```handlebars
{{select-tag content=myData
              optionValue='level1.level2.id'
              optionLabel='level1.level2.label'}}
```

The corresponding component property will simply be set to the value of the entire selected item in the content array.

### You can use it with a collection of simple strings, or complex objects.

content can be int he format of `['Item A', 'Item B', ...]` or `[ ObjectA, ObjectB, ...]`.

## Ember support

This addon should currently work with ember@2.x
