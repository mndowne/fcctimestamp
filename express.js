var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
/*app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});*/

app.use(express.static(__dirname));

app.get('/:date', function(req,res){
  
  var arr = req.params.date.split(' ');
  var nDateStr = "";
  var stamp = 0;
  
  if (isNaN(req.params.date) == false){
    var nDate = new Date(req.params.date*1000);
    var nDateMonth = nDate.getMonth() +1;
    var nDateYear = nDate.getFullYear();
    var nDateDay = nDate.getDate();
    stamp = req.params.date;
    switch (nDateMonth){
      case 1:
        nDateMonth = "January";
        break;
      case 2:
        nDateMonth = "Febuary";
        break;
      case 3:
        nDateMonth = "March";
        break;
      case 4:
        nDateMonth = "April";
        break;
      case 5:
        nDateMonth = "May";
        break;
      case 6:
        nDateMonth = "June";
        break;
      case 7:
        nDateMonth = "July";
        break;
      case 8:
        nDateMonth = "August";
        break;
      case 9:
        nDateMonth = "September";
        break;
      case 10:
        nDateMonth = "October";
        break;
      case 11:
        nDateMonth = "November";
        break;
      case 12:
        nDateMonth = "December";
        break;
    }
   
    nDateStr = nDateMonth + " " + nDateDay + ", " + nDateYear;

  }
  else if (arr.length == 3){
    var month = -1; 
    if (arr[0] == "January"){
      month = 0;
    }
    else if (arr[0] == "Febuary"){
      month = 1;
    }
    else if (arr[0] == "March"){
      month = 2;
    }
    else if (arr[0] == "April"){
      month = 3;
    }
    else if (arr[0] == "May"){
      month = 4;
    }
    else if (arr[0] == "June"){
      month = 5;
    }
    else if (arr[0] == "July"){
      month = 6;
    }
    else if (arr[0] == "August"){
      month = 7;
    }
    else if (arr[0] == "September"){
      month = 8;
    }
    else if (arr[0] == "October"){
      month = 9;
    }
    else if (arr[0] == "November"){
      month = 10;
    }
    else if (arr[0] == "December"){
      month = 11;
    }
    console.log('poop');
    var d = new Date(arr[2],month,arr[1]); 
    stamp = Math.floor(d / 1000); 
    nDateStr = arr[0] + " " + arr[1] + ", " + arr[2];
 
    if (month == -1 || arr[1] < 1 || arr[1] > 31 || arr[2] < 1970)
    {
      stamp = null;
      nDateStr = null;
    }
  }

  else {
    stamp = null;
    nDateStr = null;
  }

  var json = {unix: stamp,
              natural: nDateStr }; 
  console.log(req.params.date);  
  res.json(json);
});

app.listen(app.get('port'), function () {console.log('server is on 8080 or on the process enviornment port');});
