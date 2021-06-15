/* // Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
const lex = new AWS.LexRuntime({apiVersion:'2016-11-28',region: 'us-east-1'});

const params = {
  botAlias: 'BotEC', 
  botName:'BotEC', 
  userId: '1', //que es esto en si ?

};

const response= lex.getSession(params,(err,data)=>{
  if (err) console.log("algo salio mal",err, err.stack); 
  else     console.log(data); 
})

console.log(response.response.request.service); */

var AWS = require("aws-sdk");

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});