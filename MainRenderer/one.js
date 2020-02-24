console.log("from Renderer 1");

const BrowserWindow=require('electron').remote.BrowserWindow;
const path=require('path');
const url=require('url');

const newWindowbtn=document.getElementById('newWindowbtn');
newWindowbtn.addEventListener('click',function(event){

  let winThree=new BrowserWindow({webPreferences: {nodeIntegration: true}});
    winThree.loadURL(url.format({
        pathname:path.join(__dirname,'three.html'),
        protocol:'file',
        slashes:true
      }));

      winThree.webContents.openDevTools();
})