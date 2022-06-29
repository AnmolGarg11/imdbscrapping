const request = require("request");
const cheerio = require("cheerio");

//step 1 : request
//step 2 : parse and extrect
//step 3 : store in file


const url = "https://www.imdb.com/chart/top/?ref_=nv_mv_250";

request(url , cb);
function cb(error , response , html )
{
    if(error){
        console.log(error);
    }
    else{
        fatchdata(html);
    }
}

function fatchdata(html)
{
    let $ = cheerio.load(html);
    let movieName = $(" .titleColumn >a");
    let relesingYear = $(" .titleColumn >span");


    console.log(`MOVIE NAME                        RELEASING DATE`);
    for (let i = 0; i < movieName.length; i++) {
      let data = $(movieName[i]).text();
      let date = $(relesingYear[i]).text();
      console.log(`${i+1}. ${data}             ${date}`);
      
    }
}