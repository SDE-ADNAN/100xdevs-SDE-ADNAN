/*

*****
*   *
*   *
*   *
*****

*/

const  printHollowSquareStars =(n)=>{
    // first for loop for rows
    for(let i=0;i<n;i++){
        let str='';
        // second for loop for columns of 1st and last row to print all stars
        if(i===0 || i===n-1){
            for(let j=0;j<n;j++){
                str+='*';
            }
        }else{
            // this else is for all the rows except 1st and last row
            for(let j=0;j<n;j++){
                // for a row where j is 0 or last column, print star
                if(j===0 || j===n-1){
                    str+='*';
                }else{
                    // else print space in between
                    str+=' ';
                }
            }
        }
        console.log(str);
    }
}
printHollowSquareStars(50);