// ranArr returns an array with (amount of numbers, between min and, max - both included)
const arr = ranArr(100,-1000,1000);

// classic for loop
function maxOfArr(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

// same only with for of loop
function maxOfArr2(arr) {
    let max = arr[0];

    for (let i of arr) {
        if(i > max){
            max = i;
        }
    }

    return max;
}

// returns both the highest number and the index of it
function maxOfArr3(arr) {
    let max = arr[0];
    let index = 0;

    for (let [i,val] of arr.entries()) {
        if(val > max){
            max = val;
            index = i;
        }
    }

    return [max, index];
}

console.log(maxOfArr(arr));
console.log(maxOfArr2(arr));
console.log(maxOfArr3(arr));


// -------------------
// only other stuff
// -------------------

// return a random number between min (included) and max (included)
function ranNum(min, max){
    let ran = Math.floor(Math.random() * (max - min + 1) + min);
    return ran;
}

// amount is how many number you want in the array, min/max is for ranNum function
function ranArr(amount, min, max){
    const arr = [];

    for(let i = 0; i < amount; i++){
        arr.push(ranNum(min, max));
    }

    console.log(arr);
    return arr;
}