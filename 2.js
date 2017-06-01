
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
    if (cc != null ) {
        if (cc.length <= 4) {
            return cc;
        }
        else {
            return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
            //return cc.replace(/.(?=.{4})/g, "#");
        }
    }
}