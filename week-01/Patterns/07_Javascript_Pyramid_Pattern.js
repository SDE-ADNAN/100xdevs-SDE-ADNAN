/*

    *
   ***
  *****
 *******
*********

*/


function pyramidPattern(n){
    let str ='';
    for(let row = 0;row<n;row++){
        for(let col = 0;col<=n+row; col++){
            if(col <n-row){
                str+=' '
            }else{
                str+='*'
            }
        }
        str+='\n';
    }
    console.log(str);
}

pyramidPattern(5);