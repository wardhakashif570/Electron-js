console.log("main process working");
console.log("main.js");


const electron=require("electron");
const app=electron.app; //link the events
const BrowserWindow=electron.BrowserWindow;//Responsible for UI
const path=require("path");
const url=require("url");

let winone,winTwo;


function createwindow(){
    winone=new BrowserWindow({webPreferences: {nodeIntegration: true}});
    winTwo=new BrowserWindow({webPreferences: {nodeIntegration: true}});

    winone.loadURL(url.format({
      pathname:path.join(__dirname,'one.html'),
      protocol:'file',
      slashes:true
    }));


    winTwo.loadURL(url.format({
        pathname:path.join(__dirname,'two.html'),
        protocol:'file',
        slashes:true
      }));

    winone.webContents.openDevTools();
    winTwo.webContents.openDevTools();
    
    winone.on('closed',()=>{
        winone=null;
    })


winTwo.on('closed',()=>{
    winTwo=null;
})

}

app.on('ready',createwindow);

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
});


// app.on('activate',()=>{
// if(win===null){
//     createwindow()
// }
// });