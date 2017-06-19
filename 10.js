//
// Write function scramble(str1,str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//     For example:
//     str1 is 'rkqodlw' and str2 is 'world' the output should return true.
//     str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
//     str1 is 'katas' and str2 is 'steak' should return false.
//
//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered

function scramble(str1, str2) {

    // more faster
    var count = Object.create(null);

    Array.prototype.forEach.call(str1, function(a) {
        count[a] = (count[a] || 0) + 1;
    });

    return Array.prototype.every.call(str2, function(a) {
        return count[a]--;
    });
    
    // if(str1 || str2 !== null) {
    //
    //     let l = str2.length;
    //     for (var i = 0; i < l; i++) {
    //         if (str1.indexOf(str2[i]) > -1) {
    //             str1 = str1.replace(str2[i], '');
    //             console.log(str1);
    //         } else {
    //             return false;
    //         }
    //     }
    //     return true;
    // }

}




//not my solutions - good

// function scramble(str1, str2) {
//     var map={};
//     for(var i in str1) {
//         map[str1[i]] ? map[str1[i]]++ : map[str1[i]]=1;
//     }
//     for(var i in str2) {
//         if(!map[str2[i]]) return false;
//         map[str2[i]]--;
//     }
//     return true;
// }

//function scramble(str1, str2) {
// var array1 = str1.split("").sort();
// var array2 = str2.split("").sort();
// var i = 0;
// for(var x = 0; i<array2.length && x<=array1.length; x++) {
//     if(array2[i] === array1[x]) {
//         i++;
//     }
// }
// return (x <= array1.length);
// }

// console.log(scramble('rkqodlw','world'));
// console.log(scramble('cedewaraaossoqqyt','codewars'));
// console.log(scramble('katas','steak'));