var obj = {num:2};
var addToThis = function(a){
return this.num + a
};
addToThis.call(obj, 3); 


var obj (num:2};
var addToThis function(a, b, c){
return this.num +a +b+ c;
};

var arr= [1,2,3];t
console.log(addToThis.apply(obj, arr));



var obj = {num:2};
var addToThis = function(a, b, c){
return this.num + a + b + C;
};
var arr = [1,2,3];
var bound = addToThis.bind(obj);
console.log(bound(1,2,3));
    

//currying 
let multiply= function (x, y) {
    console.log(x +y);
    }
let multiplywo= multiply.bind(this, 2);
multiplyByTwo(3);
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);