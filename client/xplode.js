"use strict";

const Manager = require('./manager');

Vue.component('xplode', {
    data() {            
        return {
            manager: new Manager(),
            result: {
                ok: 0,
                error: 0
            },
            loading: false,
            done: false,
            xplode: {
                amount: 7,
                url: "http://jsonplaceholder.typicode.com/todos/1"

            }
        }
    },
    template: `
    <div class="form-container">
        <form name="xplodeForm">
            <input type="url"                        
                    placeholder="url"
                    v-model="xplode.url" />

            <input name="amount"
                    type="text"                        
                    placeholder="amount" 
                    v-model="xplode.amount" />

            <button type="button" @click="go(xplode)">                        
                xplode!
            </button>                        
        </form>

        <div v-show="loading">
            <p>loading...</p>
        </div>

        <div v-show="done">
            <p>done!</p>

            <p>Ok: {{result.ok}}</p>
            <p>Error: {{result.error}}</p>
        </div>
    </div> 
    `,
    methods: {
        go(x) {
            this.loading = true;
            this.done = false;

            this.manager
                .doit(x)
                .then((result) => {
                    this.done = true;
                    this.loading = false;

                    this.result.ok = result.ok;
                    this.result.error = result.error;
                });
        }
    }
});