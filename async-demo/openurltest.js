const opn = require('opn');
const arrayLink = require('./UrlDataConstant');
const delay = (intVal,amount) => {
  return new Promise((resolve) => {
    setTimeout(resolve(intVal), amount);
  });
};

async function loop() {
  for (let i = 0; i < 4; i++) {
    //console.log('opened  : '+i+' - '+arrayLink[i]);
    //opn(arrayLink[i]);
   // console.log('opened  : ',i);
    const count = await delay(i,1000);
    console.log('opened  : ',count);
  }
}

loop();