// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.
//
// Examples:
//     validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true
//
// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
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