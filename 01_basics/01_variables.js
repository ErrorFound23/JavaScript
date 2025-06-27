const accountId = 248472; // never changed
let accountEmail = "yash@420.com";
var accountPassword = '12345'; // globle scope
accountCity = "Surat" // not prefer
let accountState;

// accountId = 2; // not allowed

accountEmail = 'noddy@320.com';
accountPassword = '213324324234';
accountCity = "Vapi"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
 