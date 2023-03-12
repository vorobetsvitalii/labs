const BinarySearch = (t,A) =>
{                               
    var i = 0, j = A.length, k; 
                                 
    while (i < j)                
    {  k = Math.floor((i+j)/2);
       if (t <= A[k]) j = k;
       else i = k+1;
    }
   
    if (A[ i ] === t) return i;    
    else return -1;                
}
const arr =  [2,22,4,2,3,4,5,65,7,8,8,5,3,35,56,7,8,6,7,4,45,45,65,7,8,8,87,549,9324,934,323349,49,98,67,56,45,35,34,34,54,56,7,4,24,23,36,54,54457,456]
arr.sort(function(a, b){return a - b})
console.log(arr[BinarySearch(9324, arr)])