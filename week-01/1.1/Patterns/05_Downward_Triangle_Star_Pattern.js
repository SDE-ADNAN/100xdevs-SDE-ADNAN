/*

*****
****
***
**
*

*/

function downwardTriangleStar(n){
    let str='';
    for(let row = 0;row<n;row++){
        for(let column = 0 ;column < n - row; column++){
            str+='*';
        }
        str+='\n'
    }
    console.log(str)
}

downwardTriangleStar(5);