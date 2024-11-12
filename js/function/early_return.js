`use strict`;

// {
//   function early_return(num,rate = 2){
//     if (num < 10){
//       return num ;
//     }

//     if (10 < num < 20 ){
//       return num * rate * 10;
//     }

//     return num * rate * 100;
//   }

//   const money = early_return(5);
//   console.log(money);

//   console.log(early_return(30)* 3);
// }

{
  const early_return = (num, rate = 2) => {
    if (num < 1) {
      return num;
    }

    if (10 < num < 20) {
      return num * rate * 10;
    }

    return num * rate * 100;
  }

  console.log(early_return(5));
}

// 関数の引数に直接定義する書き方
{
  console.log(early_return( 30, (num, rate = 2) => {
    if (num < 1) {
      return num;
    }

    if (10 < num < 20) {
      return num * rate * 10;
    }

    return num * rate * 100;
  }))
}

// {
//   var myname = "global";

//   function func() {
//     var myname; 
//     console.log(myname); // 変数の巻き上げでundefinedで表示される

//     myname = "takehiro";
//     console.log(myname);
//   }
//   console.log(func());
// }
