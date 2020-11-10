//regex pattern
const pincodeRegexPattern=RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
const emailRegexPattern=RegExp(/[a-zA-Z0-9]+([._+-][0-9a-zA-Z])*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const prompt=require('prompt-sync')();

//test function
let testFunc=()=>{
    try{
        if(!pincodeRegexPattern.test(userPincode)) throw "invalid pincode"
        {
            console.log("pincode is: "+userPincode);
        }
    }catch(e){
        console.log(e);
    }
    try{
        if(!emailRegexPattern.test(userEmail)) throw "invalid email id"
        {
            console.log("email id is: "+userEmail);
        }
    }catch(e){
        console.log(e);
    }
}
//user input
let userPincode = prompt("Enter a six digit pincode: ");
let userEmail= prompt("Enter your email id: ");

//calling test function
testFunc();
