function validParentheses(str){

    if (str !== null) {

        var depth = 0;
        for(var i in str){
            if(str[i] == '('){
                depth ++;
            } else if(str[i] == ')') {
                depth --;
            }
            if (depth < 0) return false;
        }
        if (depth > 0) return false;

        return true;
    }
    return false;
}