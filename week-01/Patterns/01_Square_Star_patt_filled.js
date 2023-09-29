/*

Sqaure Star Pattern (Filled)
Print the following pattern for given number of rows.
*****
*****
*****
*****
*****


*/

import { CalculatePerformance } from "./08_Reversed_Pyramid_Star_Pattern.cjs";


const  printSquareStars=(n)=>{
    // first for loop for rows
    for(let i=0;i<n;i++){
        let str='';
        // second for loop for columns
        for(let j=0;j<n;j++){
            str+='*';
        }
        console.log(str);
    }
}

CalculatePerformance(()=>printSquareStars(5),'#001') ;