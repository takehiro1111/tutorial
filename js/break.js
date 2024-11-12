'use strict';

let amount = 100;

for(let i = 0; i < 30;i++){
  amount *= 1.1;

  if (amount < 200){
    continue;
  }
  if (amount > 300){
    break;
  }
  console.log(`${i} : ${amount}`);
}
