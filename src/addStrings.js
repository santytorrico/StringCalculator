function addstrings(str){
    if (str==""){
        return 0;
    }
    if(findSum(str)>0){
        return findSum(str);
    }
    return parseInt(str);
}

function findSum(str)
{
    let temp = "0";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (!isNaN(String(ch) * 1))
            temp += ch;
        else {
            sum += parseInt(temp);
            temp = "0";
        }
    }
    return sum + parseInt(temp);
}

export default addstrings;
