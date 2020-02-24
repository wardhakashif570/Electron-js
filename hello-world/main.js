console.log("main process working");

const electron=require("electron");
const app=electron.app; //link the events
const BrowserWindow=electron.BrowserWindow;//Responsible for UI
const path=require("path");
const url=require("url");

let win;


function createwindow(){
    win=new BrowserWindow();
    win.loadURL(url.format({
      pathname:path.join(__dirname,'index.html'),
      protocol:'file',
      slashes:true
    }));

    win.webContents.openDevTools();

    win.on('closed',()=>{
        win=null;
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