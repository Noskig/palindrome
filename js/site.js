// Get value
function getValues(){

    let userString = document.getElementById("userString").value;
    //makes alertbox invisible
    document.getElementById("alert").classList.add("invisible");
    
    if(isPalindrome(userString)){
        displayString(userString);
    }
    else{
        alert("its not an palindrome")
    }
}

//Palindrome logic
function isPalindrome(userString){

    let nospaceString = removeSpaces(userString);

    let reversestring = reverseString(userString);

    if (nospaceString == reversestring){
        return true;
    }
    else{
        return false;
    }

}

//display
function displayString(userString){

    let nospaceString= removeSpaces(userString);
        //write to page
        document.getElementById("msg").innerHTML = `Your string reversed is: ${nospaceString}`;
        //turn on alert box
        document.getElementById("alert").classList.remove("invisible");
    
}

//Reverse a String
function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        
        if(str[i] === " "){
            continue;
        }
        newString += str[i];
    }
    return newString;
}
//Removes spaces from a string
function removeSpaces(userString){
    let newString = "";
    
    for (let i = 0; i < userString.length; i++) {
        if(userString[i] === " "){
            continue;
        }
        newString += userString[i];
    }

    return newString;
}