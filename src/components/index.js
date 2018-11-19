import Vue from "vue";
import imageslider from "./imageslider.vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft,faAngleRight,faDotCircle,faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

window.$ = window.jQuery = require('jquery');

library.add(faAngleLeft,faAngleRight,faDotCircle,faCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)


export default imageslider;
