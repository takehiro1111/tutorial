`use strict`;

{
  document.querySelector('button').addEventListener('click', () => {
    document.querySelector('p').textContent = 'こんにちは';
    // document.querySelector('p').textContent = document.querySelector('button').textContent;
},false);

  // 
}


// document.querySelector('button').addEventListener('click', () => {
//   // console.log('Clicked');
// }, false);

// document.querySelector('p').textContent = 'こんにちは';

// document.querySelector('button').addEventListener('click', () => {
//   document.querySelector('p').textContent = document.querySelector('button').textContent;
// }, false);
