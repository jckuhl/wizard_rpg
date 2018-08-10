import Vue from 'vue';
import Wizard from './../ts/wizard';

new Vue({
    el: '#app',
    data: {
        wizard: null,
        name: null,
        invalidName: true,
        startGame: false,
    },
    methods: {
        validateName() {
            if(this.name.length >= 2) this.invalidName = false;
            else this.invalidName = true;
        },
        createWizard(event: Event) {
            event.preventDefault();
            this.name = this.name.slice(0,1).toUpperCase() + this.name.slice(1);
            this.wizard = new Wizard(this.name);
            this.startGame = true;
            console.log(this.wizard);
        }
    }
})