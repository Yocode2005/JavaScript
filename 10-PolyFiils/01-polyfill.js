// note :  kisi bhi function ka polyfill bnane se phle do chije pta kro
// 1) function return kya krta hai
// 2) function ka signature kya hai


// 1) polyfill for map
// signture .map
// return : new array, each element itrate, userfun

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFunction){
        const result = [];
        for(let i = 0;i<this.length;i++){
            const value = userFunction(this[i],i)
            result.push(value);
        }
        return result;
    }
}

// 2)  polyfiil for Filter
// return : new array | input userFunction
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFunction){
        const result = [];
        for(let i = 0;i<this.length;i++){
            if(userFunction(this[i])){
            result.push(this[i]);
            }
        }
        return result;
    }
}
const arr = [1,2,3,4,5];


const newArr = arr.map((i) => i*2);
console.log(newArr);
const newArr1 = arr.myMap((i) => i*3);
console.log(newArr1);


const str = arr.filter((e) => e%2 == 0);
console.log(str);
const str2 = arr.myFilter((e) => e%3 == 0);
console.log(str2);