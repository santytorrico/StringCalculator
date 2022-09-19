function addstrings(str){
    if (str==""){
        return 0;
    }
    if(sumStr(str)>0){
        return sumStr(str);
    }
    return parseInt(str);
}

function sumStr(str){
    let strArr = str.split(",");
    let sum = strArr.reduce(function(total, num){
      return parseFloat(total) + parseFloat(num);
    });

    return sum;
}

 export default addstrings;
