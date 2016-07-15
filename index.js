"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    let _win = new BrowserWindow({
        width: 700,
        height: 700,
        autoHideMenuBar: true
    });

    _win.loadURL(`file:///${__dirname}/client/dev/index.html`);

    _win.on('closed', () => {
        _win = null;
    });
});