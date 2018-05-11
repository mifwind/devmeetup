import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify, {
  theme: {
    primary: '#E53935',
    secondary: '#1E88E5'
  }
})
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created (){
    firebase.initializeApp({
      apiKey: "AIzaSyAXcmTfsoH-Cdqkiem0svlt9R0M7eykkpI",
      authDomain: "meetups-1ced0.firebaseapp.com",
      databaseURL: "https://meetups-1ced0.firebaseio.com",
      projectId: "meetups-1ced0",
      storageBucket: "meetups-1ced0.appspot.com"
    })
  }
})
