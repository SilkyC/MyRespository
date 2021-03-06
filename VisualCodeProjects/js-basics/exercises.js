//EXAMPLE #1
//Max of Two Numbers
let m = 45;
let n = 15;

let result = (m > n) ? m : n;
console.log("Bigger number is " + result);


//Method 2
let number = max(20, 2);
console.log('Larger number is ' + number);

function max(m, n) {
    return (m > n) ? m : n;
    //   if (m > n) return m;
    //   return n;
}


//EXAMPLE #2
//Landscape or Portrait
let orientation = isLandScape(300, 200);
console.log('Landscape mode : ' + orientation);

function isLandScape(width, height) {
    return (width > height);
}


//EXAMPLE #3
//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 & 5 => FizzBuzz
//Non-divisible by both numbers => same input
//Not a number ==> Not a number

const declare = fizzBuzz(30);
console.log(declare);

function fizzBuzz(insert) {
    if (typeof insert !== 'number')
        return NaN;

    if ((insert % 3 === 0) && (insert % 5 === 0))
        return 'FizzBuzz';

    if (insert % 3 === 0)
        return 'Fizz';

    if (insert % 5 === 0)
        return 'Buzz';

    return insert;
}


//EXAMPLE #4
//Speed Limit => 50
//Exceed 5 => 1 point
//Math.floor(1.3)
//10 points => Suspend License

let Speed = checkSpeed(120);

function checkSpeed(speed) {
    const speedLimit = 50;
    const KmPerPoint = 5;

    //if (speed <= speedLimit)
    if (speed < speedLimit + KmPerPoint) {
        console.log('All good');
        return;
    }
    const points = Math.floor((speed - speedLimit) / KmPerPoint);
    if (points >= 15)
        console.log('Suspend License! -', points, ' point(s)');
    else
        console.log('Caution! -', points, ' point(s)');
}


//EXAMPLE #5
//Display ODD & EVEN numbers within provided range
showNumbers(10);

function showNumbers(limit) {
    for (let num = 0; num <= limit; num++) {
        if (num > limit) {
            console.log('You reached the upper limit of the provided range');
            return;
        }
        if (num % 2 === 0)
            console.log(num, ' - EVEN Number');

        else
            console.log(num, ' - ODD Number');
    }
}

//EXAMPLE #6
//Count truthy
const array = [0, null, undefined, NaN, '', 0, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;

}

//EXAMPLE #7
//Show properties of object
const movie = {
    title: 'abc',
    releaseYear: 2019,
    rating: 4.0,
    director: "xyz",
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

//EXAMPLE #8
//SUM of Multiples of 3 & 5 between 1-to-10 (SUM OF 3,6,9 & 5,10)
console.log(sum(10));

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}

//EXAMPLE #9
//Grading

//Average: 70
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A
const arrays = [90, 80, 75, 65, 100];
console.log(calculateGrade(arrays));
/*
function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}
*/
//Split Calculation and Comparison and create a function for calc
function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(arrays) {
    let sum = 0;
    for (let value of arrays)
        sum += value;
    return sum / arrays.length;
}

//EXAMPLE #10
//Stars using nested loop
showStars(10);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let s = 0; s < row; s++)
        pattern += '|*';
        console.log(pattern);
    }
}

//EXAMPLE #11
//Show prime numbers
showPrimes(20);
/*
function showPrimes(limits) {
    for (let number = 2; number <= limits; number++) {

        let isPrime = true;
        for (let factor =2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
            if (isPrime) console.log(number);
        }
    }
}
*/
function showPrimes(limits) {
    for (let number = 2; number <= limits; number++) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}