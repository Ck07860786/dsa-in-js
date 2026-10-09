//write a program to check the given string is palindrom or not

function palindrom(str){

    let reverse ="";

    for( let i=str.length-1;i>=0;i--){
        reverse +=str[i]; 
    }

    return str= reverse;

}

console.log(palindrom("madam"))