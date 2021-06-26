
recursion(5);

function recursion(counter) {
    console.log(counter)
    if(counter > 0){
    recursion(--counter)
    } 
}

fibonacci(0, 1, 10000);

function fibonacci(first, second, end) { //0,1
    if (first + second < end){  //0+1=1 and 1<700(true)
        console.log (first + second); //1
        fibonacci(second, first + second, end);
    }
}
    

