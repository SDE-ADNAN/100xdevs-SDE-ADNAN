import invertedPyramidPattern from "./08_Reversed_Pyramid_Star_Pattern.cjs";
import pyramidPattern from "./07_Javascript_Pyramid_Pattern.js";


/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/


function diamondStarPat(n){
    pyramidPattern(n,true);
    invertedPyramidPattern(n);
}

diamondStarPat(5)