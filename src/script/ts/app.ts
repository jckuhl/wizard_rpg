import Vue from 'vue';
import Wizard from './../ts/wizard';

new Vue({
    el: '#app',
    data: {
        wizard: null,
        name: null,
        invalidName: true,
        startGame: false,
        history: '',
        command: '',
    },
    methods: {
        validateName() {
            if(this.name.length >= 2) this.invalidName = false;
            else this.invalidName = true;
        },
        createWizard(event: Event) {
            event.preventDefault();
            this.wizard = new Wizard(this.name);
            this.startGame = true;
        },
        recieveCommand() {
            let command = this.command.trim().toLowerCase().split(' ');
            if(command.length != 2) {
                this.history += 'Invalid command!\n';
            } else {
                switch(command[0]) {
                    case 'cast':
                        this.history += this.wizard.cast(command[1]);
                        break;
                }
            }
        }
    }
})