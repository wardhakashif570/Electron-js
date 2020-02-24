const { app, BrowserWindow, BrowserView } = require('electron');
function createWindow() {
    browserWindow = new BrowserWindow({ width: 1200, height: 600 });
    let browserView1 = new BrowserView({ webPreferences: { nodeIntegration: false }});
    let browserView2 = new BrowserView({ webPreferences: { nodeIntegration: false }});
    browserWindow.addBrowserView(browserView1);
    browserWindow.addBrowserView(browserView2);
    browserView1.setBounds({ x: 0, y: 0, width: 600, height: 600 });
    browserView2.setBounds({ x: 600, y: 0, width: 600, height: 600 });
    browserView1.webContents.loadURL('https://www.google.com');
    browserView2.webContents.loadURL('https://www.google.com');
    webContents.setVisualZoomLevelLimits(1, 3);
    browserWindow.on('closed', function () { browserWindow = null; });
}
app.on('ready', createWindow);