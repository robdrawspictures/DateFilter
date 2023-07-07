let testDate = '-1-7-2023';
let testDate2 = '2-9-2024';
let shittyDate = '2023-07--17';
let regDate = '2021-10-29';
let testDate3 = '-2021-10-29';
let testDate4 = '2021--7-29';
let testDate5 = '-2021-07--29';
let testDate6 = 's2021-07--29';

// console.log(testDate[0]);
// console.log(parseInt(testDate[0],10));

function filterDate(dateStr){
    if(isNaN(parseInt(dateStr[0], 10))){
        let newStr = dateStr.slice(1).split('-');
        return newStr
    } else {
        return dateStr
    }
}

let res1 = filterDate(testDate);
let res2 = filterDate(testDate2);

// console.log(res1);
// console.log(res2);

function arrayStr(str){
    for(let i = 0; i < str.length; i++){
        console.log(i + ": " + str[i])
    }
}

let newStr = shittyDate.substring(0,8) + '0' + shittyDate.substring(9,shittyDate.length);

// console.log(arrayStr(shittyDate));
// console.log(arrayStr(newStr));

function getDMYFromDate(date, unitOfTime) {
    let res = [];
    if(isNaN(parseInt(date[0], 10))){
        let newStr = date.substr(1,date.length);
        console.log('newStr: ' + newStr)
        res = newStr.split('-') 
    }
    else if(isNaN(parseInt(date[5], 10))){
        let newStr = date.substr(0,5) + date.substr(6,date.length);
        console.log('newStr: ' + newStr)
        res = newStr.split('-')
    }
    else if(isNaN(parseInt(date[8], 10))){
        let newStr = date.substr(0,8) + date.substr(9,date.length);
        console.log('newStr: ' + newStr)
        res = newStr.split('-')
    } else {
        res = date.split("-"); 
    }
    console.log(res)
    const d = res.pop();
    const m = res.pop();
    const y = res.pop();
    console.log ('d: ' + d);    
    console.log ('m: ' + m);    
    console.log ('y: ' + y); 
    if(unitOfTime === 'day'){
        return parseInt(d, 10);
    }  
    else if (unitOfTime === 'month'){
        return parseInt(m, 10);
    }  
    else {
        return parseInt(y, 10);
    }  
}

// let test1 = getMonthFromDate(testDate);
// let test2 = getMonthFromDate(testDate2);
let test3 = getDMYFromDate(shittyDate, 'year');
let test4 = getDMYFromDate(regDate, 'month');
let test5 = getDMYFromDate(testDate3, 'month');
let test6 = getDMYFromDate(testDate4, 'month');

// console.log(shittyDate[8])
// console.log(shittyDate[9])

// console.log(test1)
// console.log(test2)
// console.log(test3)
// console.log(test4)
console.log(test5)
// console.log(test6)

function basicDate(date){
    let res = date.split('-')
    if(date.length === 10){
    return res
    }
    else{
    // let filterArr = []
    // for(let i = 0; i<res.length; i++){
    //     if(res[i] !== ''){
    //         filterArr.push(res[i]);
    //     }
    // }
    // return filterArr
    return res.filter((x) => x);
    }
}

// Non-arrow function version in case you happen to work on a system that doesn't allow them
// (But who would do a thing like that...)
function basicDate2(date){
    let res = date.split('-')
    if(date.length === 10){
        return res;
    }
    else{
        return res.filter(function(x){return x;});
    }
}

function getMonthFromDate(date){
    let dateArr = basicDate2(date);
    return parseInt(dateArr[1], 10)
}

console.log(basicDate2(shittyDate));
console.log(basicDate2(testDate3));
console.log(basicDate2(testDate5));
console.log(basicDate2(testDate6));

console.log(getMonthFromDate(testDate5));