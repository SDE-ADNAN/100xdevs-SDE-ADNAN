/*

*
**
* *
*  *
*   *
******

*/

const hollowTrianglePattern=(n)=>{
    let str='';
    for(let i = 0;i<n;i++){
        for(let j=0;j<=i;j++){
            if(i===n-1){
                str+='*'
            }else if(j===0 || j===i){
                str+='*'
            }else{
                str+=' '
            }
        }
        str+='\n'
    }
    console.log(str)
}

hollowTrianglePattern(10);