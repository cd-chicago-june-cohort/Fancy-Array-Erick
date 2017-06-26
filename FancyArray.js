var array = [ "James", "Jill", "Jane", "Jack" ];

function FancyArray(arr){
    for(var k=0; k<arr.length;k++)
    {
        console.log(k + ' -> ' + arr[k]);
    }
}   

FancyArray(array);

function FancyArray2(arr, symbol){
    for(var k=0; k<arr.length;k++)
    {
        console.log(k + ' ' + symbol + ' ' + arr[k]);
    }
} 

FancyArray2(array, '=>>>');