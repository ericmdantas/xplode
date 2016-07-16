document.getElementById('btn-xplode').addEventListener('click', () => {
    let _url = ~~document.cfgXplodeForm.url.value;
    let _amount = ~~document.cfgXplodeForm.amount.value;

    for (let i = 1; i <= _amount; i++) {
        let wk = new Worker('./wk.js');

        wk.onmessage = function(ev) {
            console.log(ev.data);
        }
    }
});
