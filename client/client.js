for (let i = 0; i < 1000; i++) {
    let wk = new Worker('./wk.js');

    wk.postMessage('yo!');

    wk.onmessage = function(ev) {
        console.log('omg');
    }
}

