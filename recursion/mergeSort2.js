function mergeRec(arr)
{   if(arr.length <= 1){return arr;}
    let mitad = Math.floor(arr.length/2);
    let left = arr.slice(0,mitad);
    let right = arr.slice(mitad);
    left = mergeRec(left);
    right = mergeRec(right);
    return merge(left,right);
}

function merge(left,right){
    let respuesta = [];
    let i = 0;
    let j = 0;
    while (i<left.length && j <right.length){
        if(left[i] <= right[j])
        {respuesta.push(left[i]);
            i++;
        }
        else
        {respuesta.push(right[j]);
            j++;
        }
    }
    respuesta = respuesta.concat(left.slice(i)).concat(right.slice(j));
    
    return respuesta;
}

let a = [2,4,10,20];
let b = [1,3,10,14];
let c = [8,4,5,3,1,2,9,7,6]
console.log(mergeRec(c));