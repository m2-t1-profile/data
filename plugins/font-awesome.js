import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core'
// import {faUserSecret} from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faFacebook, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false;

library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
