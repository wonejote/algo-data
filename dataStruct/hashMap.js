class MyHashTable{

    constructor(){
        this.capacity = 16;
        this.loadFactor = 0.8;
        this.hashArr = new Array(this.capacity);
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
        if (this.hashArr[hashCode] == null)
        {this.hashArr[hashCode] = value;}
        else{
        console.log("error");
         }
         this.ocupados++;
         if (this.capacity/this.ocupados <= 0.8 )
         {
            growth();
         }
         
       }
    //hacer resize cuando empieza  collisionar mucho
    growth(){
        this.capacity*= 2;
        let newArr = new Array(this.capacity);
        for (let key of this.hashArr){

        }
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
  test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

 test.get("lion");
 test.get("dog");

test.get("kite");