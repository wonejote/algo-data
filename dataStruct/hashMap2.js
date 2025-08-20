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
        this.hashArr[hashCode].add(key,value);
        this.ocupados ++;
           //if (this.ocupados / this.capacity >= this.loadFactor){this.growth()};
    }
    //hacer resize cuando empieza  collisionar mucho
    growth(){
       
        let newArr = new MyHashTable(this.capacity*2);
        console.log(newArr.capacity);
        
        this.hashArr.forEach(function(a){
            let aux = a.head;
            while(aux){
                newArr.set(aux.key,aux.value);
                aux = aux.next;
            }
        })
        this.capacity *= 2;
        this.hashArr = newArr.hashArr;
       
    }
    get(key){
        if (this.hashArr[this.hash(key)] != null)
        {
            let val = this.hashArr[this.hash(key)];
            console.log(val);
            return val;
        }
    }

    printHash(){

        
            let i = 0;
           this.hashArr.forEach(function(a){
            let aux = a;
            a.print();
            
             i++; console.log(i);})
        }




}
 const test = new MyHashTable() 



test.set("uno",2);
test.set("dos",2);
test.set("tres",2);
test.set("cuatro",2);
test.set("cinco",2);
test.set("seis",2);
test.set("siete",2);
test.set("ocho",2);
test.set("nueve",2);
test.set("diez",2);
test.set("once",2);
test.set("doce",2);test.set("siete",2);
test.set("trece",2);
test.set("catorce",2);
test.set("quince",2);
test.set("diesiceis",2);


test.printHash();

          

           