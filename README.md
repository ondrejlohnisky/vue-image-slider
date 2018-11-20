
# image-slider

## NPM
### https://www.npmjs.com/package/@ondrejlohnisky/vue-image-slider

## Installation
```
npm i @ondrejlohnisky/vue-image-slider
```
##Usage
```
import imageslider from '@ondrejlohnisky/vue-image-slider';
Vue.component('imageslider', imageslider);
```

```
<template>
  <imageslider :images="images" :speed="1250" :interval="4250" :arrows="true" :controls="true" :stopOnHover="true" endingType="continue"/>

</template>
```


##Props

   arrows:{
      type:Boolean,
      default:true
   },
   controls:{
      type:Boolean,
      default:true
   },
   images: {
      type: Array,
      required: true
   },
   interval: {
      type: Number,
      default: 5000
   },
   speed: {
      type: Number,
      default: 1000
   },
   endingType: {
      type: String,
      default: 'continue'
   },
   stopOnHover: {
      type: Boolean,
      default: true
   }