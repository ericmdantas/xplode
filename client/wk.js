"use strict";

function str(obj) {
    return JSON.stringify(obj);
}

self.onmessage = function(ev) {
    let _info = JSON.parse(ev.data);

    fetch(_info.url)
        .then((res) => {
            if (res.status === 200) {
                return res.json();        
            }

            return Promise.reject(null);
        })
        .then(() => {
            self.postMessage(str({status: 1}));
        })
        .catch(() => {
            self.postMessage(str({status: 2}));
        });
}
