// 2 son berilgan. Ularning yig’indisini toping.
let num1 = +prompt("Birinchi sonni kiriting:");
let num2 = +prompt("Ikkinchi sonni kiriting:");

console.log(num1 + num2);

// Berilgan ikki sonning ayirmasini toping.
console.log(num1 - num2);

// Ikki sonning ko’paytmasini hisoblang.
console.log(num1 * num2);

// Berilgan sonning kvadratini toping.
console.log(num1 ** 2);

// Berilgan ikki sonning bo’linmasini topib, qoldiqni aniqlang.
console.log(num1 % num2);

//  6. Berilgan haqiqiy sonning butun qismini toping.
console.log(Math.floor(num1));
console.log(Math.floor(num2));

// 7. 5.99 va -3.56 sonlari uchun Math.trunc natijasini chiqaring.
console.log(Math.trunc(5.99));
console.log(Math.trunc(-3.56));

//  8. Quyidagi sonlar qaysi butun songa to'g'rilanadi: 9.8, -4.7, 0.5?
console.log(Math.trunc(9.8));
console.log(Math.trunc(-4.7));
console.log(Math.trunc(0.5));

//  9. 100 ga tasodifiy son qo’shib, natijaning faqat butun qismini chiqarib bering.
let randomNum = Math.random() * 100;
console.log(100 + randomNum);

//  10. To’liq haqiqiy sonlarning Math.trunc natijalarini jadval shaklida chiqaring.
console.log(Math.trunc(9.8));

// 11. Quyidagi sonlarni yaxlitlang: 3.4, 3.5, -3.6, -3.4.
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(-3.6));
console.log(Math.round(-3.4));  

//  12. Tasodifiy sonning Math.round natijasini hisoblang.
let randomNum2 = Math.random() * 100;
console.log(Math.round(randomNum2));

// 13. 10.789 ni yaxlitlang.
console.log(Math.round(10.789));

//  14. -4.55 ni eng yaqin butun songa yaxlitlang.
console.log(Math.round(-4.55));

//  15. Math.round funksiyasi bilan 50 ga tasodifiy son qo'shib natijani toping.
let randomNum3 = Math.round(Math.random() * 50);
console.log(randomNum3);

//  16. 0 dan 1 gacha bo’lgan tasodifiy sonni toping.
let randomNum4 = Math.random();

//  17. 1 dan 10 gacha bo’lgan tasodifiy butun son chiqaring.
let randomNum5 = Math.floor(Math.random() * 10)+1;
console.log(randomNum5);

//  18. 50 dan 100 gacha bo’lgan tasodifiy butun son toping.
let randomNum6 = Math.floor(Math.random() * 100)+50;
console.log(randomNum6);

//  19. Tasodifiy sonni 3 ga ko’paytirib natijasini chiqaring.
let randomNum7 = Math.random() *3;
console.log(randomNum7);

//  20. 5 tasodifiy son chiqarib ularning yig’indisini toping.
let randomNum8 = Math.random(); 
let randomNum9 = Math.random(); 
let randomNum10 = Math.random(); 
let randomNum11 = Math.random(); 
let randomNum12 = Math.random(); 

console.log(randomNum8 + randomNum9 + randomNum10 + randomNum11 + randomNum12);

//  21. Berilgan x = 5 qiymatiga 10 ni qo’shib tayinlang.
let x = 5;
let res = x+10;
console.log(res);

//  22. x = 8 qiymatini 3 ga ko’paytirib tayinlang.
let x2 = 8;
let res2 = x*3;
console.log(res2);

//  23. y = 15 qiymatidan 4 ni ayirib tayinlang.
let y = 15;
let res3 = y-4;
console.log(res3);

// 24. z = 20 qiymatini 2 ga bo’lib tayinlang.
let z = 20;
let res4 = z/2;
console.log(res4);

//  25. x = 6 qiymatiga y = 7 qiymatini qo’shib tayinlang.
let x3 = 6;
let y3= 7;
let res5 = x3 + y3;
console.log(res5);

// Berilgan son musbat yoki manfiy ekanligini aniqlang va natijani konsolga chiqaring.
let son = +prompt("Sonni kiriting: ");
if (son > 0) {
    console.log("Musbat son");  
} else{
    console.log("Manfiy son");
}

// Berilgan son juft yoki toq ekanligini aniqlab natijani chiqaring.
let son2 = +promt("Sonni kiriting: ");
if (son%2==0) {
    console.log("Juft son");
}else{
    console.log("Toq son");
}

// Ikki son berilgan. Qaysi biri kattaligini aniqlang va konsolga chiqaring.
let son1 = +prompt("Birinchi sonni kiriting: ");
let son3 = +prompt("Ikkinchi sonni kiriting: ");
if (son1>son3) {
    console.log("1-son katta");
} else{
    console.log("Ikkinchi son katta");
}

// Berilgan baho (0 dan 100 gacha) uchun quyidagi qoidalar asosida natijani chiqaring:
let grade = +promt("Bahoni kiriting: ");
if (grade>=90) {
    console.log("A'lo");
} else if (grade>=70) {
    console.log("Yaxshi");
}else if(grade>=50) {
    console.log("Qoniqarli");
} else if (grade<=49) {
    console.log("Qoniqarsiz");
}

// Ishchining ishlagan soatlari berilgan. Agar soat 40 dan ko'p bo‘lsa, "Qo‘shimcha ish soati" deb chiqaring, aks holda "Oddiy ish soati" deb chiqaring.
let ishSoat = +prompt("Ish soatini kiriting: ");
if (ishSoat>40) {
    console.log("Qo'shimcha ish soati");
} else{
    console.log("Oddiy ish soati");
}