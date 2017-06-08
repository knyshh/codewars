
// Create a function named divisors that takes an integer and returns an array with all of the integer's ' +
// 'divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' ' +
// '(use Either String a in Haskell).
function divisors(integer) {
    var res = []
    for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
    return res.length ? res : integer + ' is prime'
};


//classical divisors
function factors(n)
{
    var num_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i ++)
        if (n % i === 0)
        {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    num_factors.sort(function(x, y) {return x - y;});  // numeric sort
    return num_factors;
}
// console.log(factors(15));  // [1,3,5,15]
// console.log(factors(16));  // [1,2,4,8,16]
// console.log(factors(17));  // [1,17]

