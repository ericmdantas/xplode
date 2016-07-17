"use strict";

module.exports = class Manager {
    doit(cfg) {
        this.result = {
            ok: 0,
            error: 0,
            time: 0
        }

        return new Promise((res) => {
            for (let i = 1; i <= cfg.amount; i++) {
                let _wk = new Worker('./wk.js');
                _wk.postMessage(JSON.stringify(cfg));

                _wk.onmessage = (ev) => {
                    let _info = JSON.parse(ev.data);

                    switch(_info.status) {
                        case 1: ++this.result.ok;
                                break;
                        case 2: ++this.result.error;
                                break;
                    }

                    if (cfg.amount === (this.result.ok + this.result.error)) {
                        res(this.result);
                    }
                }
            }
        });
    }
}