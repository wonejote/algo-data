class NodeStack{
    constructor(val){
        this.valor = val;
        this.next = null;
        this.prev = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(val){
        let element = new NodeStack(val);
        if (this.head == null){ 
            this.head = element;
            this.tail = element;
            return}
        else{
            this.tail.next = element;
            element.prev = this.tail;
            this.tail = element;
            return;
        }
    }
    
    pop(){
        if (this.head == null){ return "esta vacio"}
       else if(this.tail.prev)
        {
            let element = this.tail.valor;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            return element;
        }
        else if(this.head)
        {
            this.head = null;
            if (this.tail)
            {
                let element = this.tail.valor;
                this.tail = null;
                return element;
            }

        }
        
    }

    print(){
        let aux = this.head;
        let str = "";
        while(aux != null){
            
            str += aux.valor + "--->";
            aux = aux.next;
        }
        str += " null"
        console.log(str);
    }


}

//--------------------------

class NodeQueue{
    constructor(val){
        this.valor = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    enqueue(val){
        let element = new NodeQueue(val);
      if (this.head == null){
        this.head = element;
        this.tail = element;
      }
      else
      {
        this.tail.next = element;
        this.tail = element;
      }
    }
    dequeue(){
        if (this.head == null)
        { return;}
        else
        {
            let element = this.head.valor;
            this.head = this.head.next;
            if (this.head = null){
                this.tail = null;
            }
            return element;
        }

    }
        print(){
        let aux = this.head;
        let str = "";
        while(aux != null){
            
            str += aux.valor + "--->";
            aux = aux.next;
        }
        str += " null"
        console.log(str);
    }
}

