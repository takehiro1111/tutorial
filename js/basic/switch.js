const num = Number(prompt("すうじの入力をしてください。"));

switch (num) {
  case 0 :
    console.log('0です。');
    break;
  case 1:
    console.log('1です。');
    break;
  default:
    console.log('0でも1でもありません。');
    break;
}
