// dinamik, değişkenin tipini ve değerini değiştirebiliyoruz.
// primitive değerlerin iç değiştirilemez. 
// en son giren ilk çıkıyor. Tabak örneği
// myVar1 = "hello" // hello kısmı literal kısmı
// myVar2 = myVar1; // bu durumda myVar1 in değeri değişse de myVar2 nin değerini değiştrmez.
// Farklı bellekte o yuzden değişmez.
//stackoverflow yığınlar bellekte doluyor.  
// heap valulerin depolandığı yerdir. iadesini yapmam lazım işim bitince.
// c ve c++ da bellek yönetimini siz yapıyorsunuz. Eğer sen bellekteki veriyi iptal etmezsen bellek dolu oluyor ve yavaşlıyor.
// bazı dillerde stringler heap de muhafaza ediliyor.
// javascript heap belleğiyle ilgileniyor. ve biz null dediğimizde siliyor.  
// arrayi heap te tutuyor. çünkü ne kadar yer tutacağı belli değil.

// primitive 7 tane şuan. 

// ! Boolean

// console.log('false equals false, correct? ', false == false);
// console.log('Boolean(0) equals FALSE, correct? ', Boolean(0) == false);
// console.log('0 equals false, correct? ', 0 == false);
// console.log('Boolean("0") equals TRUE, correct? ', Boolean('0') == true);
// console.log('0' == false); // string olarak false, fakat boolean olarak true.

// console.log('\n*** null boolean operations ***');
// console.log('Boolean(null) equals to', Boolean(null)); // the value is false
// console.log('null == false equals to', null == false); // false
// console.log('null == true equals to', null == true); // false
// console.log('typeof null equals to', typeof null); // "object"
// console.log('0 == null equals to', 0 == null); // false
// console.log('Boolean(null) == Boolean(0)', Boolean(null) == Boolean(0));
 
//  console.log('\n*** undefined boolean operations ***');
// console.log('Boolean(undefined) equals', Boolean(undefined));
// console.log('undefined == false correct?', undefined == false);
// console.log('undefined == true correct?', undefined == true);
// console.log('0 == undefined correct?', 0 == undefined);
// console.log('null == undefined correct?', null == undefined);
// console.log('null === undefined correct?', null === undefined); 

//  console.log('\n*** string/object boolean operations ***');
// console.log("Boolean('') equals", Boolean(''));
// console.log("'' == false, correct?", '' == false);
// console.log('empty object {} equals', Boolean({})); 

// console.log('\n*** typeof operations ***');
// console.log(typeof null); // "object"
// console.log(typeof undefined); // "undefined"
// console.log(typeof false); // "boolean"
// console.log(typeof 0); // "number"
// console.log(typeof NaN); // "number" 

// ! Number

// console.log('\n*** NaN operations ***');
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(typeof NaN); // "number"
// mathhew = 'new student';
// veri girişleri her zaman stringtir. Kullanıcıdan aldığımız sayılar stringdir.
// ! use global isNaN() function to overcome this

// safe integerin üstündeki sayılar aynıdır.
// min value nun altındaki sayılar eşittir.
// eksi ve artı sonsuz herşeyden büyüktür.

// console.log('\n*** Number operations ***');
// console.log('Number.MAX_VALUE:', Number.MAX_VALUE);
// console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
// console.log('Number.MIN_VALUE:', Number.MIN_VALUE);
// console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);
// console.log('Number.EPSILON:', Number.EPSILON);
// console.log('Number.POSITIVE_INFINITY:', Number.POSITIVE_INFINITY);
// console.log('Number.NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY);
// console.log('Number.NaN:', Number.NaN);


// console.log('\n*** Some builtin Math functions ***');
// console.log('Math.floor(10.7)', Math.floor(10.7));
// console.log('Math.floor(10.3)', Math.floor(10.3));
// console.log('Math.floor(-10.7)', Math.floor(-10.7));
// console.log('Math.floor(-10.3)', Math.floor(-10.3));
// console.log('Math.ceil(10.7)', Math.ceil(10.7));
// console.log('Math.ceil(10.3)', Math.ceil(10.3));
// console.log('Math.ceil(-10.7)', Math.ceil(-10.7));
// console.log('Math.ceil(-10.3)', Math.ceil(-10.3));
// console.log('Math.trunc(10.7)', Math.trunc(10.7));
// console.log('Math.trunc(10.3)', Math.trunc(10.3));
// console.log('Math.trunc(-10.7)', Math.trunc(-10.7));
// console.log('Math.trunc(-10.3)', Math.trunc(-10.3));
// console.log('Math.round(10.7)', Math.round(10.7));
// console.log('Math.round(10.3)', Math.round(10.3));
// console.log('Math.round(-10.7)', Math.round(-10.7));
// console.log('Math.round(-10.3)', Math.round(-10.3));
// console.log('Math.random()', Math.random()); 

// ! Number constructor

// console.log('123 == 123.0', 123 == 123.0);
// console.log("Number('123')", Number('123'));
// console.log("Number('123') === 123", Number('123') === 123);
// console.log("Number('12.3')", Number('12.3'));
// console.log("Number('12.00')", Number('12.00'));
// console.log("Number('123e-1')", Number('123e-1'));
// console.log("Number('')", Number(''));
// console.log('Number(null)', Number(null)); 

// console.log('\n*** hopefully we will reach 40 ***');
// // 16 tabanlıkta sayı olarak algıladığı için ve binary olarak algıladığı için
// // başında 0 varsa 8 lik tabanda algılıyor.
// console.log('015 + 025 =', 015 + 025);
// console.log(' 15 + 025 =', 15 + 025);
// console.log('015 +  25 =', 015 + 25);
// console.log(' 15 +  25 =', 15 + 25);

// console.log("25"-1); // 24 yapıyor.
// x = parseInt("025",10); // 10 luk tabanda 25
// y = parseInt("025",16)  // 16 lık tabanda 
// console.log(x);
// console.log(y);
 














