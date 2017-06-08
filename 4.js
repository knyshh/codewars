/* Should return ᐃ type:
 0 : if ᐃ cannot be made with given sides
 1 : acute ᐃ
 2 : right ᐃ
 3 : obtuse ᐃ
 */
function triangleType(a, b, c){

    let sides = [a,b,c].sort(function(a,b){return a-b});

    a = sides[0], b = sides[1], c = sides[2];

    if (a <= c - b) {
        return 0;
    }
    else if (c*c === a*a + b*b){
        return 2;
    }
    else if (c*c > a*a + b*b){
        return 3;
    }
    else {
        return 1;
    }

}

console.log(triangleType(7,3,2));
console.log(triangleType(2,4,6));
console.log(triangleType(8,5,7));
console.log(triangleType(3,4,5));
console.log(triangleType(7,12,8));