//! 1). Print odd numbers in an array :-
//! a). Anonymous function :-
let odd = function(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i]);
        }
    }
    return  result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//! b). IFFE function :-
(function(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9,10]);

//! c). Arrow function :-
let odd = (arr) => {
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 !== 0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));






//! 2). Convert all the strings to title caps in a string array :-
//! a). Anonymous function :-
let title = function(caps){
    let str = caps.split(" ");
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    let result = str.join(" ");
    return result;
}
console.log(title("ConVerTeD sTrInGs tO tItLe cASe"));

//! b). IFFE function :-
(function(caps){
    let str = caps.split(" ");
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    let result = str.join(" ");
    console.log(result);
})("ConVerTeD sTrInGs tO tItLe cASe");

//! c). Arrow function :-
let title = (caps) => {
    let str = caps.split(" ");
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    console.log(str.join(" "));
}
console.log(title("ConVerTeD sTrInGs tO tItLe cASe."));






//! 3). Sum of all numbers in an array :-
//! a). Anonymous function :-
let num = function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(num([1,2,3,4,5,6,7,8,9,10]));

//! a). Anonymous function :-
(function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    };
    console.log(sum);
})([1,2,3,4,5,6,7,8,9,10]);

//! c). Arrow function :-
let num = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(num([1,2,3,4,5,6,7,8,9,10]));






//! 4). Return all the prime numbers in an array :-
//! a). Anonymous function :-
let prime = function(num){
    let result = [];
    for(let i=2; i<=num; i++){
        let isPrime = true;
        for(let j=2; j<=Math.sqrt(i); j++){
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result.push(i);
        }
    }
    return result;
}
console.log(prime([100]));

//! b). IFFE function :-
(function(num){
    let result = [];
    for(let i=0; i<num; i++){
        let isPrime = true;
        for(let j=0; j<Math.sqrt(i); i++){
            if(i%j === 1){
                return false;
                break;
            }
        }
        if(isPrime){
            result.push(i);
        }
    }
    console.log(result);
})([100]);

//! c). Arrow function :-
let prime = (num) => {
    let result = [];
    for(let i=2; i<num; i++){
        let isPrime = true;
        for(j=2; j<=Math.sqrt(i); j++){
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result.push(i);
        }
    }
    return result;
}
console.log(prime([100]));






//! 5). Return all the palindromes in an array :-
//! a). Anonymous function :-
let palindrome = function(arr){
    let org = arr;
    let forw = arr.toLowerCase();
    let reve = forw.split("").reverse().join("");

    if(forw === reve){
        console.log(`${org} is a palindrome`);
    }else{
        console.log(`${org} is not a palindrome`);
    }
    // console.log(forw, reve);
}
console.log(palindrome("Racecar"));

//! b). IFFE function :-
(function(arr){
    let org = arr;
    let forw = arr.toLowerCase();
    let reve = forw.split("").reverse().join("");

    if(forw === reve){
        console.log(`${org} is a palindrome`);
    }else{
        console.log(`${org} is not a palindrome`);
    };
})("Racecar");

//! c). Arrow function :-
let palindrome = (arr) => {
    let org = arr;
    let forw = arr.toLowerCase();
    let reve = forw.split("").reverse().join("");

    if(forw === reve){
        console.log(`${org} is a palindrome`);
    }else{
        console.log(`${org} is not a palindrome`);
    };
};
console.log(palindrome("Racecar"));






//! 6). Return median of two sorted arrays of the same size :-
//! a). Anonymous function :-
let medianNumber = function(arr1 ,arr2){
    let add = arr1.concat(arr2).sort(function(a, b){
        return a-b;
    });

    let median = Math.floor(add.length/2);
    if(add.length%2 === 0){
        return ((add[median-1] + add[median])/2);
    }else{
        return add[median];
    }
}
// let arr1 = [1,4,3,9,8,13,15];
// let arr2 = [7,5,6,4,14,12];
console.log(medianNumber([1,4,3,9,8,13,15],[7,5,6,4,14,12]));

//! b). IFFE function :-
(function(arr1, arr2){
    let add = arr1.concat(arr2).sort(function(a, b){
        return a-b;
    })
    let median = Math.floor(add.length/2);
    if(add.length%2 === 0){
        return ((add[median-1] + add[median])/2);
    }else{
        console.log(add[median]);
    }
})([1,4,3,9,8,13,15],[7,5,6,4,14,12]);

//! c). Arrow function :-
let medianNumber = (arr1 ,arr2) => {
    let add = arr1.concat(arr2).sort(function(a, b){
        return a-b;
    });

    let median = Math.floor(add.length/2);
    if(add.length%2 === 0){
        return ((add[median-1] + add[median])/2);
    }else{
        return add[median];
    }
}
console.log(medianNumber([1,4,3,9,8,13,15],[7,5,6,4,14,12]));






//! 7). Remove duplicates from an array :-
//! a). Anonymous function :-
let fruits = function(arr){
    let result = [];
    arr.forEach(ele => {
        if(!result.includes(ele)){
            result.push(ele);
        }
    })
    return result;
}
console.log(fruits(["Apple", "Banana", "Cane", "Mango", "Grape", "Orange", "Grape", "Orange", "Orange"]));

//! b). IFFE function :-
(function(arr){
    let fruits = [];
    arr.forEach(ele => {
        if(!fruits.includes(ele)){
            fruits.push(ele);
        }
    })
    console.log(fruits);
})(["Apple", "Banana", "Cane", "Mango", "Grape", "Orange", "Grape", "Orange", "Orange"]);

//! c). Arrow function :-
let fruits = (arr) => {
    let result = [];
    arr.forEach(ele => {
        if(!result.includes(ele)){
            result.push(ele);
        }
    })
    return result;
}
console.log(fruits(["Apple", "Banana", "Cane", "Mango", "Grape", "Orange", "Grape", "Orange", "Orange"]));


//! 8). Rotate an array by k times :-
//! a). Anonymous function :-
let rotate = function(arr, k){
    let n = arr.length;
    k = k % n;
    for(let i=0; i<k; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotate([1,2,3,4,5,6,7], 7));

//! b). IFFE function :-
(function(arr, k){
    let n = arr.length;
    k=k%n;
    for(let i=0; i<k; i++){
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1,2,3,4,5,6,7], 7)

//! c). Arrow function :-
let rotate = (arr, k) => {
    let n = arr.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotate([1,2,3,4,5,6,7], 7));