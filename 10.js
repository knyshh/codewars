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

    if(str1 || str2 !== null) {

        let l = str2.length;
        for (var i = 0; i < l; i++) {
            if (str1.indexOf(str2[i]) > -1) {
                str1 = str1.replace(str2[i], '');
                console.log(str1);
            } else {
                return false;
            }
        }
        return true;
    }

}

// console.log(scramble('rkqodlw','world'));
// console.log(scramble('cedewaraaossoqqyt','codewars'));
// console.log(scramble('katas','steak'));