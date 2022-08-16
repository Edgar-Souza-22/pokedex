import Vue from 'vue'
import Router from 'vue-router'
import Pokemon from './components/Pokemon'
import Details from './components/Details'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        { path: '/', component: Pokemon},
        { path: '/pokemon/:id', component: Details, props: true}
    ]
})