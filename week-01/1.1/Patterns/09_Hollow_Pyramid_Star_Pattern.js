/*

    *
   * *
  *   *
 *     *
*********

*/

import  CalculatePerformance  from "./08_Reversed_Pyramid_Star_Pattern.cjs";


function hollowPyramidPattern(n) {
    let str = '';
    for (let row = 0; row < n; row++) {
        for (let col = 0; col <= n + row; col++) {
            if (col < n - row) {
                str += ' '
            } else {
                if (col === n - row || col === n + row) {
                    str += '*'
                } else if (row === n - 1) {
                    str += '*'
                } else {
                    str += ' '
                }
            }
        }
        str += '\n';
    }
    console.log(str);
}

function fromWebHollowPyramidPatern(n) {
    let string = '';
    // External loop
    for (let i = 1; i <= n; i++) {
        // printing spaces
        for (let j = 1; j <= n - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            if (i === 1 || i === n) {
                string += "*";
            }
            else {
                if (k === 0 || k === 2 * i - 2) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
        }
        string += "\n";
    }
    console.log(string);
}

CalculatePerformance(()=>hollowPyramidPattern(5000),'#oooo') ;
CalculatePerformance(()=>fromWebHollowPyramidPatern(5000),'#xxxxx') ;