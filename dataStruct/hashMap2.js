class HashList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(key,value)
    {
        let newNode = new  HashNode(key,value);

        if (this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    print(){
    
            let aux = this.head;
            let str = "";
            while (aux){
                str += aux.key + " ---> ";
                aux = aux.next;
            }
            str += "null";
            console.log(str);
            
        }

}

class HashNode{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashTable{

    constructor(capacity = 16 ){
        this.capacity = capacity;
        this.loadFactor = 0.75;
        this.hashArr = new Array(this.capacity).fill(0).map(a => new HashList);
        this.ocupados = 0;
    }     
    // hash function
    hash(key){
    let hashCode = 0;
    const primeNumber = 31;
     for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + key.charCodeAt(i);
     hashCode = hashCode % this.capacity;
     }
     return hashCode; 
    }

    // agregar calve-valor
    set(key,value){
        let hashCode = this.hash(key);
        let bucket = this.hashArr[hashCode];
        let aux = bucket.head;
        while (aux) {
        if (aux.key === key) {
            aux.value = value; 
            return;            
        }
        aux = aux.next;
        }

        bucket.add(key,value);
        this.ocupados ++;
        if (this.ocupados / this.capacity >= this.loadFactor){this.growth()};
    }
    //hacer resize cuando empieza  collisionar mucho
    growth(){
       
        let newArr = new MyHashTable(this.capacity*2);
        this.hashArr.forEach(bucket => {
            let aux = bucket.head;
            while(aux){
                if (aux.key != null){
                
                newArr.set(aux.key, aux.value);
                aux = aux.next;}
            }
        })
        this.capacity = newArr.capacity;
        this.hashArr = newArr.hashArr;
       
    }
    get(key){
        let hashCode = this.hash(key);
        if (this.hashArr[hashCode].head != null)
        {
            let aux = this.hashArr[hashCode].head;
            while(aux){
                if (aux.key === key){ return aux.value;}
                aux = aux.next
            }
        }
        return null;
    }

    printHash(){

        
            let i = 0;
           this.hashArr.forEach((bucket,i) =>{
               process.stdout.write(`Bucket ${i}: `);
        bucket.print();})
        }
    clear()
    {
        
        this.capacity = 16
        this.loadFactor = 0.75;
        this.hashArr = new Array(this.capacity).fill(0).map(a => new HashList);
        this.ocupados = 0;
    }
    borrar(key){
    let hashCode = this.hash(key);
    let bucket = this.hashArr[hashCode];
    let aux = bucket.head;
    let prev = null;

    while (aux) {
        if (aux.key === key) {
            if (prev === null) {
                bucket.head = aux.next;
                if (aux === bucket.tail) {
                    bucket.tail = null;
                }
            } else {
                // "Saltar" el nodo actual
                prev.next = aux.next;
                if (aux === bucket.tail) {
                    bucket.tail = prev; // si era el último
                }
            }

            this.ocupados--;   // actualizamos contador
            return true;       // borrado con éxito
        }

        prev = aux;
        aux = aux.next;
    }

    return false; 
}


}

const tabla = new MyHashTable(4); // pequeña capacidad inicial para forzar growth rápido

// 🔹 Insertar elementos
tabla.set("uno", 1);
tabla.set("dos", 2);
tabla.set("tres", 3);
tabla.set("cuatro", 4);

// 🔹 Actualizar valor de una clave existente
tabla.set("tres", 33);

// 🔹 Más inserciones para forzar growth
tabla.set("cinco", 5);
tabla.set("seis", 6);
tabla.set("siete", 7);
tabla.set("ocho", 8);

// 🔹 Obtener algunos valores
console.log("get('uno') =", tabla.get("uno"));       // 1
console.log("get('tres') =", tabla.get("tres"));     // 33 (actualizado)
console.log("get('diez') =", tabla.get("diez"));     //

console.log(tabla.ocupados);