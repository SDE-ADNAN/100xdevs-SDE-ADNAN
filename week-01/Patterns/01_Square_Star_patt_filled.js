/*

Sqaure Star Pattern (Filled)
Print the following pattern for given number of rows.
*****
*****
*****
*****
*****


*/


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

printSquareStars(5);