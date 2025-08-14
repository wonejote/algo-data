function sumLoop(n){
    let sum = 0;
    for (let i = 1; i <= n; i++)
    {sum += i;}
    return sum;
}

function sumRecursive(n) {return n==1 ? 1 :  n + sumRecursive(n-1);}

function sumGauss(n) {return (1 + n)*(n/2);}

//--------

function factorialRecursive(n){
    return n==1 ? 1 : n*factorialRecursive(n-1);
}

//--------

function fibonacci(n){ 
     return n <= 2 ? 1 : fibonacci(n-1) + fibonacci(n-2);   
}

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

//----------
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list){
    let act = list;
    
    while(act){
        console.log(act.value);
        (act = act.next);
    } 
}

function printListRecursive(list){
    
    console.log(list.value);
    if (list.next){printListRecursive(list.next)}

    }


function invertList(list){

    if(list.next){ invertList(list.next);}
    console.log(list.value);
    
}
function invertListLoop(list){
    let temp = list;
    while(temp.next){
        temp = temp.next;
    }
    console.log(temp.value)
}

//_--------

function conteo(n){
    if ( n == 0) {console.log("yupi"); return}
    else{ console.log(n); conteo(n-1);}
}

//-----
function collatz(n){
    console.log(n);
    if (n <= 1){
        
        return 1}
    else if( n%2 == 0){
        
        return collatz(n/2);
    }
    else{
        
        return collatz(3*n + 1);
    }
}
 //-----
 function power(base,pow){
    if (pow == 0){return 1;}
    else
    {
        return base*power(base,pow - 1);
    }
 }
 console.log(power(3,7));
