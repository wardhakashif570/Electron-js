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
   browserWindow.on('closed', function () { browserWindow = null; });


    // browserView1.destroy('closed', function () { browserWindow = null; });
    
    // browserView.destroy('closed', function () { browserWindow = null; });
    // browserView1.destroy(browserWindow.removebrowserView(browserView1));
    // browserView2.destroy(browserWindow.removebrowserView(browserView2));
  
  
}
app.on('ready', createWindow);