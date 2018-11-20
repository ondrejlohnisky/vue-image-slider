
# image-slider
### https://github.com/ondrejlohnisky/vue-image-slider

### https://www.npmjs.com/package/@ondrejlohnisky/vue-image-slider
This is my simple library for slideshow based on Vue.js and JQuery
<br/>
required: JQuerry!!

## Installation
```
npm i @ondrejlohnisky/vue-image-slider
```
## Usage
```
import imageslider from '@ondrejlohnisky/vue-image-slider';
Vue.component('imageslider', imageslider);
```

```
<template>
  <imageslider :images="images" :speed="1250" :interval="4250" :arrows="true" :controls="true" :stopOnHover="true" endingType="continue"/>
</template>
```


## Props

|Prop            |Value                                                           |Description                                |Default       |
|----------------|----------------------------------------------------------------|-------------------------------------------|--------------|
|arrows          |`true/false`                                                    |Display arrows                             |`true`        |
|controls        |`true/false`                                                    |Dispaly controlls                          |`true`        |
|images          |`array of objects`                                              |Object consist of name,description and src |`required!`   |
|interval        |`number` ms                                                     |speed of the interval                      |`5000`        |
|speed           |`number` ms                                                     |speed of the slide                         |`1000`        |
|endingType      |`'continue'/'rollback'`                                         |how is the ending of slideshow handled     |`continue`    |
|stopOnHover     |`true/false`                                                    |stop when user hover over slider           |`true`        |
