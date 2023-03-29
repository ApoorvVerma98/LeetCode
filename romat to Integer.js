//1.Roman to Integer//
var romanToInt = function(s) {
    let num = 0;
    let objRoman = {
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }

    for(let i=0; i<s.length; i++){
         if(objRoman[s[i]] < objRoman[s[i+1]]){
             num=num-objRoman[s[i]]
         }else{
              num=num+objRoman[s[i]]
         }
    }
    return num
};
console.log(romanToInt("XL"))
