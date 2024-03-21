const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const { autoUpdater, AppUpdater } = require("electron-updater");
const { exec } = require('child_process');
const path = require('path'); // Requiere el módulo 'path'





const createWindow = () => {
    const { BrowserWindow } = electron;

    const configs = {
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js') // Ruta a tu script de pre-carga

        }
    };

    const window = new BrowserWindow(configs);

    window.loadFile("main.html");

    ipcMain.on('nm-edit', (event) => {
        exec('nm-connection-editor', (error, stdout, stderr) => {
          if (error) {
            alert(`Error: ${error}`);
            return;
          }
    
          event.sender.send('command-result', stdout);
        });
      });
};

app.whenReady().then(createWindow);


