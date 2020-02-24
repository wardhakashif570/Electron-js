console.log("main process working");

const electron=require("electron");
const app=electron.app; //link the events
const BrowserWindow=electron.BrowserWindow;//Responsible for UI
const path=require("path");
const url=require("url");

let win,dimwindow,colorWindow,framelesswin;
let parentwin,childwin;


function createwindow(){
    // win=new BrowserWindow();
    // dimwindow=new BrowserWindow({width:400,height:400,maxWidth:600,maxHeight:600});
    // colorWindow=new BrowserWindow({backgroundColor:'#FF0000'});
    // framelesswin=new BrowserWindow({backgroundColor:'#FFFF00',frame:false});
    parentwin=new BrowserWindow({title:'Parent'});
    childwin=new BrowserWindow({show:false,parent:parentwin,title:'Child',modal:true});
    childwin.loadURL('https://www.google.com');
    childwin.once("ready-to-show",()=>{
    childwin.show();
    });
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