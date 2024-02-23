const electron = require("electron");
const { app, BrowserWindow } = electron;



const createWindow = () => {
    const configs = {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    };

    const window = new BrowserWindow(configs);

    window.loadFile("main.html");
};

app.whenReady().then(createWindow);


