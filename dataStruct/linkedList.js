class List{
    constructor(){
        this.head = null;
        this.tail = null;
    }

  
    append(element){
        element = new Node(element);
        if (this.head == null){ 
            this.head = element;
            this.tail = element;

             }
    
        else{
           
           element.prev = this.tail;
           this.tail.next = element;
           this.tail = element;
        }
    } 
    prepend(element){
        element = new Node(element);
        if (this.head == null)
        {
            this.head = element;
            this.tail = element;
        }
        else{
        this.head.prev = element;
        element.next = this.head;
        this.head = element;
        }
        
    }
    toString(){
        let aux = this.head;
        let str = " "
        while (aux != null){
            str += aux.valor;
            str += " ---> ";
            aux = aux.next;
        }
        str += " null."
        console.log(str);
    }
    pop(){
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
    borrarPrimero(){
        this.head = this.head.next;
        this.head.prev = null;
    }
    size(){
        let aux = this.head;
        let count = 0;
        while(aux)
        {
            count++;
            aux = aux.next;
        }
        return(count);
    }
    getHead(){return this.head.valor;}
    getTail(){return this.tail.valor;}

    atIdx(n){
        let aux = this.head;
        let count = 0;
      
        while(aux)
        {
            if (count == n){return aux.valor;}
            aux = aux.next;
            count++;
           
        }
        return "no hay indice " + n;

    }
    contains(val){
        let aux = this.head;
    
        while(aux)
         {if (aux.valor == val){return true;}
            aux = aux.next;
            
        }
        return false;
    }
    find(val){
         let aux = this.head;
         let count = 0;
        while(aux)
         {if (aux.valor == val){return count;}
            aux = aux.next;
            count++;
            
        }
        return false;

    }
   insertAt(element, idx) {
    element = new Node(element);
    let aux = this.head;
    let count = 0;

    while (aux) {
        if (count === idx) {
            element.prev = aux.prev; 
            element.next = aux;

            if (aux.prev) {  
                aux.prev.next = element;
            } else {
                this.head = element;
            }
            aux.prev = element;
            break;
        }
        aux = aux.next;
        count++;
    }
}
  removeAt(idx) {
    if (idx === 0) {
        this.borrarPrimero();
        return;
    }

    let aux = this.head;
    let count = 0;

    while (aux) {
        if (count === idx) {
            if (aux.prev) {
                aux.prev.next = aux.next;
            }
            if (aux.next) {
                aux.next.prev = aux.prev;
            } else {
                this.tail = aux.prev;
            }
            break;
        }
        aux = aux.next;
        count++;
    }
}


}

class Node
{
    constructor(valor){
        this.valor = valor;
        this.next = null;
        this.prev = null;
    }
}

let lista = new List;

lista.append(1);
lista.append(2);
lista.append(3);
lista.append(4);

lista.insertAt(10,2);
lista.toString();
lista.insertAt(20,4)
lista.toString();




