import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSort,
  faSortNumericUp,
  faSortNumericDown,
  faSortAlphaUp,
  faSortAlphaDown,
  faFilter
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
library.add(faSort,faSortNumericUp,faSortNumericDown,faSortAlphaUp,faSortAlphaDown,faFilter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
