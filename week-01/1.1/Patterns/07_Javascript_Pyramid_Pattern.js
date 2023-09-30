/*

    *
   ***
  *****
 *******
*********

*/


function pyramidPattern(n,star){
    let str ='';
    for(let row = 0;!star?row<n:row<n-1;row++){
        for(let col = 1;col<=n+row; col++){
            if(col <n-row){
                str+=' '
            }else{
                str+='*'
            }
        }
        if(!star?row!==n-1:row!==n-2){
            str+='\n';
        }
    }
    console.log(str);
}

pyramidPattern(5);

export default pyramidPattern