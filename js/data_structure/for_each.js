'use strict';

{
  let age = [10, 20, 30, 40, 50];

  age.forEach((age) => {
    console.log(age);
  });

  const family = ['take', 'yuki', 'nobu', 'saki'];
  family.forEach((family) => {
    console.log(family);
  });

  let money = [100, 200, 300, 400, 500];
  for (let i = 0; i < money.length; i++) {
    if (money[i] < 400){
      continue;
    }
    console.log(money[i]);
  };

  let sports = ['soccer', 'baseball', 'basketball', 'tennis', 'golf'];
  sports.forEach((element,index) => {
    console.log(`${index} : ${element}`);
  });
}

{
  let num = [10, 20, 30, 40, 50];
  let sum = 0;

  num.forEach(num => {
    sum += num;
  })
  console.log(`Sum: ${sum}`);
  console.log(`Acg:${sum / num.length}`)
}
