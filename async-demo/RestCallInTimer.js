const request = require('request');
const Printer = ['IDCard1','IDCard2','IDCard3','IDCard4','IDCard5','IDCard6','IDCard7','IDCard8'];

const delay = (message,amount) => {
  return new Promise((resolve) => {
    console.log(message);
    setTimeout(resolve, amount);
  });
};

async function CallRestinLoop() {
  for (let i = 0; i < Printer.length; i++) {
    callRest(Printer[i]);
    await delay(' Printer Id is '+Printer[i],7000);
  }
}

function callRest(param){
  request('http://www.google.com?search='+param, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

function CallRest(){
  CallRestinLoop();
}

CallRest();