import Vue from 'vue';
import Wizard from './../ts/wizard';

new Vue({
    el: '#app',
    data: {
        wizard: new Wizard('merlin'),
        name: 'fuck off'
    },
    methods: {
        createWizard() {

        }
    },
    created: function() {
        console.log('hello');
    }
})