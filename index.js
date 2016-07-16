"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    let _win = new BrowserWindow({
        width: 900,
        height: 900,
        autoHideMenuBar: true,
        resizable: false
    });

    _win.loadURL(`file:///${__dirname}/client/index.html`);

    _win.on('closed', () => {
        _win = null;
    });
});