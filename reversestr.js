const str = "hello";
const reversed = "";
//Time Complexity O(n)
//Space Complexity O(n²) due to string immutability
function reveseStr(str, reversed) {
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];

    }
    return reversed;
}

console.log(reveseStr(str, reversed))