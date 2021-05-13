//while döngüsünde durdurmamız lazım, true olduğu sürece döner sonsuz.
// let i = 0;
// let sum= 0;
// while (i<5) {
//     sum += i;
//     i++;
// }
// console.log(`the total is : ${sum}`)

// en az bir kere döner do while
// for döngüsü 3 döngüde döner.

// for (var i = 0; i<10;i++){
//     console.log("i : " +i);
// }

// var sum = 0;
// for (var i=0;i<7;i++){
//     sum += i;
// }
// console.log("the total is: " + sum);

// let bests = ['bilge adam', 'google','amazon','tesla']
// for (let i=0; i<bests.length;i++){
//     console.log(`${i+1} : ${bests[i]}`);
// }

// break ten dolayı 3 olduğunda çıkacaktır.
// var i = 0;
// while (i<10){
//     if(i === 3){
//         break;
//     }
//     i++;
// }
// console.log(i);

// continue 
// 2 ve 4 de başa alacak.
// var i;
// for (i=0;i<7;i++){
//     if(i==2 || i==4){
//         continue;
//     }
//     console.log(i);
// }

// let text = 'Atatürk';
// for (let i =0; i<text.length;i++){
//     console.log(text[i]);
// }

// birden fazla değişken tanımlayabiliriz
// let text = 'Atatürk';
// for (let i =0, j = 10; i<j;i++, j--){
//     console.log(text[i]);
// }

// iç içe döngüler
// for (i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         document.write(`${i} x ${j} = ${i*j}<br>`);
//     }
//     document.write('<br>');
// }

//tersten yazdırma
// let text = 'Atatürk';
// for (let i= text.length-1; i>=0; i--){
//     console.log(text[i]);
// }


//3 ile çarpımları göstermeme,

// for (i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         if(j===3) continue;
//         document.write(`${i} x ${j} = ${i*j}<br>`);
//     }
//     document.write('<br>');
// }

// 5ten sonra yazdırmama
// for (i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         if(j===3) continue;
//         if (j===5) break;
//         document.write(`${i} x ${j} = ${i*j}<br>`);
//     }
//     document.write('<br>');
// }

// continue kullanıldığı yer önemli.

// const numbers= [0,1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for (let i=0;i<numbers.length; i++) sum += numbers[i];
// console.log(sum);

// çift sayıları toplamış oluruz
// const numbers= [0,1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for (let i=0;i<numbers.length; i+=2) sum += numbers[i];
// console.log(sum);

// sadece çift sayıları toplama
// const numbers= [0,1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for (let i=0;i<numbers.length; i++) {
//    if (i%2 === 0)
//     sum += numbers[i];
// } 
// console.log(sum);

// const ile tanımladık hata verdi önemli
// const numbers= [0,1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for (let i=0;i<numbers.length; i++) {
//     const number = numbers[i];
  
//     sum += number % 2 === 0 ? number : 0;
// } 
// console.log(number);
// console.log(sum);
// var ile yaptık hata vermedi


// const numbers= [0,1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for (let i=0;i<numbers.length; i++) {
//     var number = numbers[i];
  
//     sum += number % 2 === 0 ? number : 0;
// } 
// console.log(number);
// console.log(sum);

// const factNumber = 5;
// let calcFactorial = 1;
// for (let i = factNumber; i>0;i--) calcFactorial *=i;
// console.log(calcFactorial);

// const factNumber = Number(prompt('Enter a number!'))
// let calcFactorial = 1;
// for (let i = factNumber; i>0;i--) calcFactorial *=i;
// console.log(calcFactorial);

// let factNumber ;
// let calcFactorial=1;
// let message ='Enter a number';
// while(true){
//     factNumber = Number(prompt(message))
//     if (Number.isInteger(factNumber) && factNumber >0) break;
// }

// for (let i=factNumber; i>0; i--) calcFactorial *=i;
// console.log(calcFactorial);
// console.log(`${factNumber}!= ${calcFactorial}`);

// console.log(`${factNumber}! = ${calcFactorial}`);

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   } else {
//     console.log(`${i}`);
//   }
// }

// const x = 5;
// if (x % 2 === 0) {
//   console.log(`${x} is an even number.`);
// } else {
//   console.log(`${x} is an odd number.`);
// }

// console.log(`${x} is an ${(x % 2 === 0 && 'even') || 'odd'} number`);

// for (let i = 1; i <= 100; i++) {
//   console.log(
//     `${i} ${(i % 3 === 0 && 'Fizz') || ''}${(i % 5 === 0 && 'Buzz') || ''}`
//   );
// }


// const text = 'Clarusway';
// const char = 'a';
// for (let i = 0; i < text.length; i++) {
//   if (char === text[i]) {
//     console.log(`${char} is at index ${i}`);
//     break;
//   }
// }


// let x = Math.trunc(Math.random() * 20) + 1;
// console.log(x);




// let randomNumber = 0;
// let counter = 0;
// while (randomNumber !== 6) {
//   randomNumber = Math.trunc(Math.random() * 6) + 1;
//   console.log(`Random Number is ${randomNumber}`);
//   if (randomNumber === 6) {
//     console.log('Here comes 6, exiting...');
//     continue;
//   }
//   if (randomNumber === 3) counter++;
//   if (counter > 2) {
//     console.log('Number 3 occured 3 times exiting ...');
//     break;
//   }
// }






// const age = 15;
// console.log(age >= 18 ? 'Wellcome' : 'You are not allowed');





// const age = '18';
// if (age === 18) console.log('You are allowed');






