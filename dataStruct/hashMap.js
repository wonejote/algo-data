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

    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.2;
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
         
           console.log("bucket: " + hashCode);
           this.hashArr[hashCode].add(key,value);
           this.hashArr[hashCode].print();

           this.ocupados ++;
    }
    //hacer resize cuando empieza  collisionar mucho
    growth(){
        this.capacity*= 2;
        let newArr = new Array(this.capacity);
        console.log("hauga");
    }
    get(key){
        if (this.hashArr[this.hash(key)] != null)
        {
            let val = this.hashArr[this.hash(key)];
            console.log(val);
            return val;
        }
    }



}
 const test = new MyHashTable() // or HashMap() if using a factory



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
test.set("doce",2);
test.set("trece",2);
test.set("catorce",2);
test.set("quince",2);
test.set("diecises",2);

test.set("uno",2);
test.set("dos",2);


   /*set(key,value){
        let hashCode = this.hash(key);
        if (this.hashArr[hashCode] == null)
        {
            let newList = new HashList();
            this.hashArr[hashCode] = newList;

        }  console.log("bucket: " + hashCode);
           newList.add(key,value);
           newList.print();

           this.ocupados ++;
    }*/
   let arr = new Array(5);
   arr.fill(0);
   arr = arr.map( a => "z");
   

// arr[2].head = "doss";
 //arr[3].head = "dwos";
   console.log(arr);

   
          

          

           