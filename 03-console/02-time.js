#!/usr/bin/node

function longTask(){
    var num = 0;
    for(var i=0;i<10000;i++){
      for(var j=0;j<1000;j++){
              num+=i*j;
                  
      }
        
    }
      return num;

}

var n = longTask();
console.log('n=%d',n);
