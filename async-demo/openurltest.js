const opn = require('opn');
const arrayLink = require('./UrlDataConstant');

const delay = (message,amount) => {
  return new Promise((resolve) => {
    console.log(message);
    setTimeout(resolve, amount);
  });
};

async function loop() {
  for (let i = 0; i < arrayLink.length; i++) {
    opn(arrayLink[i]);
    await delay('opened  : '+i+' - '+arrayLink[i],5000);
  }
}

function callLoop(){
  loop();
}

callLoop();