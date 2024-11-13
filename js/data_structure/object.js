'use strict';

{
  // let obj = {first:'soccer',second:'baseball'};
  // console.log(obj.first)
  // obj.first = 'basket';
  // delete obj.second; // オブジェクトのプロパティを削除する
  // console.log(obj.first);
  // console.log(obj);
}

// オブジェクトを配列に変換
// {
//   let obj = { math: 60, english: 80 };
//   let arr = Object.entries(obj);
//   console.log(arr);

//   let sum = 0; // 初期化
//   arr.forEach((prop) => {
//     sum += prop[1];
//     console.log(`${prop[0]} : ${prop[1]}`);
//   })
//   console.log(`SUM : ${sum}`);
//   console.log(`AVG : ${sum / arr.length}`);
// }

// spliceを用いた配列の要素を操作
// {
//   const arr = [10,20,30];
//   const af_arr = arr.splice(1,1,"additional");
//   console.log(af_arr);
//   console.log(arr)
// }

// join , split
// {
//   let arr = ["apple", "orange", "banana"];
//   console.log(arr.join("||"));
//   console.log(arr.join(""));
  
//   const str = arr.join("||")
//   console.log(str.split("||"));
// }

// {
//   const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// }

// 配列の各要素を処理して、新しい配列を作成
// {
//   const prices = [100, 200, 300];

//   const priceWithTax = [];
//   prices.forEach((price) =>{
//     priceWithTax.push(price * 1.1);
//   })
//   console.log(priceWithTax);

//   const prices_2 = [400, 500, 600];
//   const priceWithTax_2 = prices_2.map((price_2) =>{
//     return price_2 * 1.1;
//   })
//   console.log(priceWithTax_2);
// }

// filterで条件に合致する要素だけを抽出して新しい配列を返す
// {
//   const prices = [100, 200, 300, 400, 500];

//   // forEachで条件をつけて反復処理できるがコードが冗長的で長い。
//   // const priceOver300 = []
//   // prices.forEach((price) => {
//   //   if (price > 300){
//   //     priceOver300.push(price)
//   //   }
//   // }

//   // filterで変数への代入も一括で行う。
//   // const priceOver300 = prices.filter((price)=>{
//   //   return price > 300;
//   // })

//   //   実行文が1行であればreturnを省略できる。
//   //   const priceOver300 = prices.filter(price => price > 300);

//   console.log(priceOver300);
// }

// {
//   const scores = [10, 20, 30, 40, 50];
//   const [a,b,c,d,e] = scores;

//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(e);
// }

// 分割代入
// {
//   let like = "Sushi";
//   let dislike = "Mushroom";
//   [like,dislike] = [dislike,like];
//   console.log(like);
//   console.log(dislike);
// }

// レスト構文→左辺で残りの要素をまとめて受け取る
// {
//   const scores = [10, 20, 30,40,50];
//   const [a,b,...others] = scores;
//   console.log(a);
//   console.log(b);
//   console.log(others);
// }

// スプレッド構文→配列を展開して受け取る
// {
//   const MoreScores = [100, 200, 300];
//   const scores = [10, 20, 30,...MoreScores];
//   const [first,second,...others] = scores;

//   console.log(first);
//   console.log(second);
//   console.log(others);
// }

{
  const morescores = {social:60};

  const scores = {
    math:90,
    english:80,
    science:70,
    ...morescores
  }

  const{math,...others} = scores;
  // console.log(math);
  console.log(others);
  console.log(scores);
}

// スプリット構文を使用すると個別の配列が作られる。(ニュアンスむずいが、、)
{
  const scores = [1,2,3];
  const morescores = [...scores];
  scores[0] = 100 

  console.log(scores);
  console.log(morescores);
}
