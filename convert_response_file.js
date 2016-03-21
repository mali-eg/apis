var fs = require('fs');
var LineByLineReader = require('line-by-line');

var response = parseResponseFile();
console.log(JSON.stringify(response, null, 4));

function parseResponseFile() {
  var statusArray = ["status", "body", "headers"];
  var statusPointer = 0;
  var response={
    "status":null,
    "rawResponse": "",
    "headers":{}
  }
  var lineArray = fs.readFileSync("/dev/stdin").toString().split("\n");
  var rawResponseString = "";
  for (var counter=0; counter<lineArray.length; counter++) {
     var line=lineArray[counter];
      if (line=="--") {
        statusPointer++;
        if (statusPointer>2) {
          if (rawResponseString.length>0) {
            response.rawResponse = JSON.parse(rawResponseString);
          }
          return response;
        }
        continue;
      }
      var currentParsingStatus = statusArray[statusPointer];
      switch(currentParsingStatus) {
        case "status": response.status=parseInt(line); break;
        case "body" : rawResponseString += line; break;
        case "headers": var headerArray=parseHeader(line); 
                        response.headers[headerArray[0]]=headerArray[1]; 
                        break;
      }
  }
  if (rawResponseString.length>0) {
    response.rawResponse = JSON.parse(rawResponseString);
  }
  // we should never get here, but nevertheless:
  return response;
}

function parseHeader(line) {
  var splittedLine = line.split(":");
  var headerKey = splittedLine.shift();
  var headerValue = splittedLine.join(":").trim();
  return [headerKey, headerValue];
}
