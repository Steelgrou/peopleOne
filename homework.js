// Masala 1

// function power(a, n) {
//     return Math.pow(a, n)
// }

// var result = power(3, 5)
// console.log(result)


//Masala 2



// Masala 3

// function sing(n) {
//     if (n < 0) {
//         return -1
//     }
//     else if (n > 0) {
//         return 1
//     }

//     else {
//         return 0
//     }

// }

// var result = sing(10)
// console.log(result)


//Masala 4
// function numberofRoots(A, B, C) {

// }


// var result = numberofRoots(1, -6, 9)


//Masala 5


//Masala 6

// function sumRange(A, B) {
//     if (A > B) {
//         return 0
//     }
//     else {
//         let yigindi = 0
//         for (let i = A; i <= B; i++) {
//             yigindi += i
//         }
//         return yigindi
//     }
// }

// var result = sumRange(8, 10)
// console.log(result)


// Masala 7

// function calc(A, B, S) {
//     if (S === "*") {
//         return A * B
//     }
//     else if (S === "+") {
//         return A + B
//     }
//     else if (S === "-") {
//         return A - B
//     }
//     else if (S === "/") {
//         return A / B
//     }
//     else {
//         return 0
//     }
// }

// console.log(calc(7, 8, "*"))
// console.log(calc(7, 8, "+"))
// console.log(calc(7, 8, "-"))
// console.log(calc(7, 8, "/"))
// console.log(calc(7, 8, "&"))



//  Masala 8

// function isEven(k) {
//     if (k % 2 === 0) {
//         return k = true;
//     }

//     else {
//         return false
//     }
// }

// console.log(isEven(8))

// Masala 9

// function sortABCFirst(a, b, c) {
//     if (a < b && a < c) {
//         return b
//     }
//     else if (c < b && c < a) {
//         return b
//     }

// }
// let resultFirst = sortABCFirst(10, 5, 8)
// console.log(resultFirst)


//Masala 10 

function isPower(K, N) {
    if (Math.pow(K, 1/N)) {
        return true
    } else {
        return false
    }
}

let result = isPower(2, 3)
console.log(result)


//Masala 11

// function isPrime(N) {
//     if (N % 2 === 1) {
//         return true;
//     }

//     else {
//         return false
//     }
// }

// let result = isPrime(3)
// console.log(result)


// Masala 12






//Masala 13
// function digitNth(K, N) {
//     let KString = String(K);

//     if (KString.length >= N) {
//         let nthDigit = parseInt(KString[N - 1]);
//         return nthDigit;
//     } else {
//         return -1;
//     }
// }

// console.log(digitNth(1057, 5));


// Masala 14

// function inverseNumber(N) {
//     if (N >= 0) {
//         const reversedStrN = N.toString().split('').reverse().join('');
//         return parseInt(reversedStrN);
//     } else { console.log("Noldan past sonni kiritmang iltimos"); }
// }
// let result = inverseNumber(56814)
// console.log(result);


//Masala 15






// Masala 16
// function factorial(N) {
//     if (N >= 0) {
//         let result = 1;
//         for (let i = 1; i <= N; i++) {
//             result *= i;
//         }
//         return result
//     } else {
//         return 1
//     }

// }

// let result1 = factorial(5);
// console.log(result1)


//Masala 17

// function getSum3(N) {
//     let s = 0;
//     for (let i = 0; i <= N; i++) {
//         if (i % 3 == 0) { s += i }

//     }
//     return s;
// }
// console.log(getSum3(15));


// Masala 18

// function sumOddEven(N) {
//     let s = 0
//     let x = 0;
//     for (let i = 1; i <= N; i++) {
//         if (i % 2 == 0) {
//             s += i;
//         }
//         else {
//             x += i
//         }
//     }
//     return [s, x];
// }
// console.log(sumOddEven(10));

// Masala 19

// function invertTime(Hour, Minutes, Second) {
//     let all = Hour * 3600 + Minutes * 60 + Second;
//     return all;
// }
// console.log(invertTime(0, 6, 40));

//Masala 20
// function decTime(H, M, S) {
//     let all = H * 360 + M * 60 + S - 1;
//     return all
// }
// let result = decTime(0, 6, 40)
// console.log(result)

//Masala 21

// function isLeapYear(Y){

// }


//Masala 22

















//Masala  1

// let n = promt("N=")
// function kvadrat(n) {
//     for (let=0; i = 0; i <= n; i++) {

//     }
// }




//Masala 2
// let a = promt("O`zgaruvchini kiriting")
// if (a < 0) {
//     manfiy(a)

// }
// else if (a > 0) {
//     musbat(a)
// }

// else {
//     console.lof("son nolga teng")
// }

// function musbat(a) {
//     for (let i = 0; i <= 5; i++) {
//         console.log(a);
//     }


// }

// function manfiy(a) {
//     for (let i = 0; i <= 3; i++) {
//         console.log(a)
//     }

// }




// let word = prompt("Matnni kiriting");
// if (word.length > 5) {
//     Katta(word);
// }
// else {
//     Kichik(word);
// }

// function Katta(word) {
//     console.log(word.toUpperCase())
// }

// function Kichik(word) {
//     console.log(word.toLowerCase())
// }


// // Masala 6

// let a = 30
// let b = 2

// if (Math.abs(a - b) >= 10) {
//     console.log("Orasidigi farq 10 katta yoki teng")
// }

// else {
//     console.log('Orasisidagi farq 10 dan kichik')
// }

