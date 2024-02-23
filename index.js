const electron = require("electron");
const { app, BrowserWindow } = electron;
const { autoUpdater, AppUpdater } = require("electron-updater");



//Update Flags


autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

const createWindow = () => {
    const configs = {
        width: 800,
        height: 600,
        icon: __dirname + 'preferences-system.png',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
        
    };

    autoUpdater.checkForUpdates();

    const window = new BrowserWindow(configs);

    window.loadFile("main.html");
};

app.whenReady().then(createWindow);


