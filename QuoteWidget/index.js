let request=require('request');
request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",function(err,response,body){
    let bodyJson=JSON.parse(body);
    let randQuote=bodyJson[0]["content"];
    document.getElementById("Quote").innerHTML=randQuote;
});