// ilk değer ataması yapıp değişken atamak önemlidir.Çünkü değer atanmamış değişkenlere hafıza ayrılıyor.
// var count = 10;

// console.log('from outside');
// var a = 3; // window.a diyerek a yı bulabiliyoruz. this.a da kullanılabilir

// var b = 6 ;
// console.log(b);

// var b;
// console.log(b); //undefıne verdı cunku deger ataması yapmadık.
// b = 6;
// console.log(b);

// var c = ' '; // undefine vereceğine boş değer verin.

// eger hıc tanımlamadıysak is not defined diyecek

// use strict eger bu yazılı olursa  hata  verecektir.
// s6 ile artık aşağıdaki ifadeyi anlayabiliyor.
// b=6;
// console.log(b)

// var x;
// console.log(x)
// //undefined hatadı verecktir.

// var x=5;
// var y=7;
// y=x;
// console.log(x);
// console.log(y);

// atamalar sağdan sola yapılır önemli

// 4ahmet, your name, they-surname bu ifadeler yanlış değişkenler için
// first_7, value9a, $ahmet bu ifadeler doğrudur. _ ve $ başta kullanabiliriz.

// var for; // hata veriyor Uncaught SyntaxError: Unexpected token 'for'
// for un sadece tek başına kullanılmasına izin vermiyor. örnek forinstance örnek veriyor.

// var aliMehmetSelim =9; //camelcase

// var a = 'ali-mehmet-selim-aasd-asdasd' // kebab case
// var b = 'ali_mehmet_selim_erdo_asd'// snake case

// class Validation // Uppercamel case veya pascal case sınıfları oluştururken büyük harfle başlıyoruz.

// class Validation {
//     SCREAMİNG_SNAKE_CASE // bu kullanım değiştirmeyi düşünmediğiiz değişkenlerde kullanıyoruz.

// }

// const SPEED_LİMİT =120; 

// var a = 10;
// {
//     let b=3; // Uncaught ReferenceError: b is not defined hata verdi
// }
// console.log(a);
// console.log(b);

// var a = 10;
// {
//     let b=3;
//     console.log(b); // bu şekilde yazdığımızda sıkıntı olmuyor.

// }
// console.log(a);

// let sadece skope içinde çalışır dışarıdan erişilemez. 
//Fakat var çalışır. Ama neden istenmiyor çünkü ramde devamlı hafızayı işgal ediyor.
// memorye yüklenmemek için s6 ile let ve const geldi.

// yol();
// functıon yol() {
//     if (true) {
//         var c= 55;
//         let d=4;
//         console.log(c);
//         console.log(d);

//     }
//     console.log(c);
//     console.log(d);
// }


// a=3;
// console.log(a);
// var a; // var ile sonda dahi tanımlansa çalışıyor. hostin varı algılıyor.

// a=3;
// console.log(a);
// let a; // hata veriyor çünkü sonradan tanımlama yok let de

// let a;
// console.log(a);
// a=3; // execution kısmında. hata veriyor.Undefined

// const x = 5;
// console.log(x); // hata veriyor const değişmez 2. değer atayamıyoruz.
// x=7;
// console.log(x);

// let x = 5;
// console.log(x);
// let x=7; // aynı şey ikinci kez tanımlanırsa hata veriyor sadece x yazsak sorun yok
// console.log(x);


// var x = 5;
// console.log(x);
// var x=7; // varda iki kez tanımlayabiliyoruz.
// console.log(x);

// const x; // eğer const x= 7; dersek sorun yok.
// x = 7; // hata veriyor cunku değişken aynı anda tanımlanır.
// console.log(x);

// function func1() {
//     if(true) {
//         var c = 55;
//         let d = 4;
//         console.log(c);
//         console.log(d); // sadece c yazılıyor

//     }
//         console.log(c);
//         console.log(d);


// }
// func1();


// function func1() {
//     if(true) {
//         const c = 55;
//         let d = 4;
//         console.log(c);
//         console.log(d); // let ve const çevrim dışına çıkamıyor.

//     }
//         console.log(c);
//         console.log(d);


// }
// func1();

// var a = 5;
// console.log(typeof a);
// a = '5';
// console.log(typeof a);

// var a = 5.15 ;
// console.log(typeof a); // noktalı olsada number diye geçiyor.

// var a= 'Merhaba';
// console.log(typeof a);

// var b = "selam";
// var name1 = 'mark';
// var t = 'merhaba dunya';
//  console.log(`merhaba ${name1}`);
//  console.log(`2+3=${2+3}`);

// console.log(0.1+0.2);

// consola window.location = `https://${0.1+0.2}.com`; // sayı sistemi ile alaklı bir sorun olduğu ve bu konu.

// console.log((0.1+0.2).toFixed(1)); // yaptığımızda sorun çözülüyor. virgülden sonra 1 tane aldık

//15 satıra kadar doğruluğu kabul ediyor ama 16 sayı olursa bir üste yuvarlıyor

// var x = 999999999999999;
// var y = 9999999999999999;
// console.log(x);
// console.log(y); // yuvarladı















