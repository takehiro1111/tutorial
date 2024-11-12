let command;

// while (command !== 0){
//   console.log(`${command} is entered`);
//   command = Number(prompt('Menu 123 or 0 to exit'));
// }


do {
  command = Number(prompt('Menu 123 or 0 to exit'));
  if (command === 0){
    console.log('Exit');
  }else {
    console.log(`${command} is entered`);
  }
  
}while (command !== 0);
