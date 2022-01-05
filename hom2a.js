// 1- hom2a

function largest(numbers){
    let max = null ;
    for ( let i = 0; i < numbers.length; i++){
if (numbers[i] > max){
    max = numbers[i];
}
    }
    return max;
}

let res = largest([20,30,10,22,34,60]);
console.log(res)

// 2-hmo2b
function rev(arr){
    let a= new Array;
        for(let i= arr.length-1 ; i >= 0 ; i-- ){
            a.push(arr[i]);
        }
    return a ;
} 
let arr1 = [10,20,30,40,50,60,70];
let arr2 = rev(arr1);
console.log(arr2);

// 3-hom2c

function find(num1,num2){
    let a =num2.length;
    for (let i =0 ; i<a; i++){
        if(num2[i]=== num1){
            return true;
        }
    }
    return false;
}

let res = find ([1,2,3,4,5,6]);
console.log(res);

// 4-hom2d
function sum(arr){
    let s = 0;
    for(let i= 0; i<arr.length; i++){
    s +=  arr[i];
    }
return s;
}
const res = sum ([10 , 40 , 50,4,7,90]);
console.log(res);



// 5- hom2e

function maer(arr){
    let a = arr.concat();
}
let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let arra = arr1.concat(arr2);
console.log(arra);




//  6- hom2g

function merge(first ,second){
        for ( let i = 0 ; i < second.length ; i ++){
            first.push(second[i]);
        }
        return first;
    }
    let res = merge([1,2,3],['a','b','c']);
    console.log(res);