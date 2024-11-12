const rate = 1.0;

for (let price = 100; price <= 110; price+=10) {
  console.log(`Price : ${price}`);
  for (let amount = 10; amount <= 20; amount+=10) {
    console.log(amount);
    console.log(price*amount*rate);
  }
}
