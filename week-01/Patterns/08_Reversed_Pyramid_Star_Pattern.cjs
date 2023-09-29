/*

*********
 *******
  *****
   ***
    *

*/

/**
 * Function to calculate performance of a function/method in milliseconds(ms).
 * @param {*} callBack  a callback function of which you want to calculate performance.
 * @param {*} id  a unique id for the interpreters refrence while interpretation.
 * @return {*}  any
*/
 function CalculatePerformance(callBack,id){
    console.time('Function '+id);
    callBack();
    console.timeEnd('Function '+id)
}

function invertedPyramidPattern(n){
    let str ='';
    for(let row = 0; row<n; row++){
        for(let col = 0; col<(2*n-row-1); col++){
            if(col <= row-1){
                str+=' '
            }else{
                str+='*'
            }
        }
        str+='\n';
    }
    console.log(str);
}

CalculatePerformance(()=>invertedPyramidPattern(5),'#1')

function invertedPyramidPattern2(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str += ' '.repeat(i) + '*'.repeat(2 * (n - i) - 1) + '\n';
    }
    console.log(str);
}

CalculatePerformance(()=>invertedPyramidPattern2(5),'#2')

module.exports = CalculatePerformance;