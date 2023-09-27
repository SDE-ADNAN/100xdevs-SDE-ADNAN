/*

    *
   **
  ***
 ****
*****

*/

// approach 1
// function printRightAngleTriangle(n){
//     let str=''
//     for(let i=1; i<=n;i++){
//         for(let j=0;j<n-i;j++){
//             str+=' '
//             process.stdout.write(' ')
//         }
//         for(let k=0;k<i;k++){
//             str+='*'
//             process.stdout.write('*')
//         }
//         console.log();
//     }
// }


// approach 2
function printRightAngleTriangle(n){
    let string=''
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 0; j < n - i; j++) {
          string += " ";
        }
        // printing star
        for (let k = 0; k < i; k++) {
          string += "*";
        }
        string += "\n";
      }
      console.log(string);
      
}



printRightAngleTriangle(10);