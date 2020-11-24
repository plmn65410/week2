// keyword let ==> block code
// keyword var ==> function code  
// keyword const ==> block code and static variable 
const orange = 12;
let apple = 15;
var banana = 10;
{
    var banana = 5; // replace ==> banana 10
    console.log(banana + 5); // 10
}
console.log(orange); // 12
console.log(banana + 10); // 15
console.log(apple); // 15