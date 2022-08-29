let arr = ['HTML', 'CSS', 'JavaScript'];
const char = ' and '; 
let result = ' ';

for (let i=0; i < arr.length; i++){
    result = result.concat(arr[i]); 
    if (i < arr.length - 2) {
        result = result.concat(", ");
    }
    if (i == arr.length - 2){
        result = result.concat(char);
    }
}
document.getElementById("arrPrint").innerHTML = result;
