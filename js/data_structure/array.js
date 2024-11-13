'use strict';

{
  // let num = [1,2,3]

  // console.log(num[2]);
  // num[3] = 80;
  // console.log(num);
}

// push, pop, shift, unshift
// {
//   let num = [1,2,3]

//   num.push(5);
//   console.log(num);

//   num.pop();
//   console.log(num);

//   num.unshift(0);
//   console.log(num);

//   num.shift();num.shift(); 
//   console.log(num);
// }

// {
//   const scores = [80, 90, 40, 70,10,20];

//   for (let i = 0; i < scores.length; i++){
//     console.log(scores[i]);
//   }
// }

// forと配列の組み合わせ
{
  let for_in = [10, 20, 30];
  for (let index in for_in) {
    console.log(index); // インデックスを出力
    console.log(for_in[index]); // インデックスを参照することで要素を出力
}

  let for_of = [50,60,70];
  for (let element of for_of){
    console.log(element); // 要素を直接出力
  }

  let eaches = [100,200,300];
  eaches.forEach((each) => {
    console.log(each); // forEachメソッドも要素を直接出力できる。
  }

  )
}
