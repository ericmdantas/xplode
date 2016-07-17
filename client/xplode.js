;(function() {
    Vue.component('xplode', {
        data() {            
            return {
                loading: false,
                done: false,
                xplode: {
                    amount: 11,
                    url: "jsonplaceholder.typicode.com/todos/1"

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
            </div>
        </div> 
        `,
        methods: {
            go(x) {
                this.loading = true;
                this.done = false;

                setTimeout(() => {
                    this.loading = false;
                    this.done = true;
                }, 1000);
            }
        }
    });

    new Vue({
        el: "#app" 
    });
}());