class Node{
    constructor(value){
        this.value = value;
        this.leftLeaf = null;
        this.rightLeaf = null;
    }
}

class BST{
    constructor(){
        this.root = null;
        this.cola = [];
    }

    add(value){

        if (Array.isArray(value)){
            for (let v of value){
                this.add(v);

            }
            return;
        }
        let newLeaf = new Node(value);

        if (this.root === null){this.root = newLeaf;}

        else
        {
            this.addRecursive(this.root,newLeaf);
        }
    }
    addRecursive(root, newLeaf){
     if (root.value > newLeaf.value){
        if (root.leftLeaf === null){root.leftLeaf = newLeaf; return;}
        else {this.addRecursive(root.leftLeaf, newLeaf);}
     }

       if (root.value <= newLeaf.value){
        if (root.rightLeaf === null){root.rightLeaf = newLeaf; return;}
        else {this.addRecursive(root.rightLeaf, newLeaf);}
     }

    }

       prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;

        if (node.rightLeaf !== null) {
            this.prettyPrint(node.rightLeaf, prefix + (isLeft ? "│   " : "    "), false);
        }

        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

        if (node.leftLeaf !== null) {
            this.prettyPrint(node.leftLeaf, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

    inOrder(root = this.root){
            if(root === null){return;}
            
            this.inOrder(root.leftLeaf);

            console.log(root.value);

            this.inOrder(root.rightLeaf)
            
        }


    preOrder(root = this.root){
            if(root === null){return;}

            console.log(root.value);

            this.preOrder(root.leftLeaf);

            this.preOrder(root.rightLeaf);
            
        }
    posOrder(root = this.root){
            if (root === null){return;}

            this.posOrder(root.leftLeaf);

            this.posOrder(root.rightLeaf);

            console.log(root.value);
    }


    


  depth(valor,root = this.root, contador = 0){
    console.log(contador);
     if (root === null){return - 1;}
     if(root.value == valor){return contador;}
     

    let left = this.depth(valor,root.leftLeaf, contador + 1);
     if (left !== -1){ return left;}

     return this.depth(valor,root.rightLeaf,contador + 1);

  }

  balance(){
    this.balanced = [];
    this.sortTree();
    console.log(this.balanced);
    this.root = null;

    this.sortedArrayToBST(this.balanced);
  }

   sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) {return null;}

    let mid = Math.floor((start + end) / 2);

    this.add(arr[mid]);
    this.sortedArrayToBSTRecur(arr, start, mid - 1);

    this.sortedArrayToBSTRecur(arr, mid + 1, end);

   }

 sortedArrayToBST(arr) {
    this.sortedArrayToBSTRecur(arr, 0, arr.length - 1);
  }

  sortTree(root = this.root){
    if(root === null){return;}
            
    this.sortTree(root.leftLeaf);

    this.balanced.push(root.value);

    this.sortTree(root.rightLeaf)
            
  }

  delete(value, root = this.root) {
    if (root === null) return null;

    if (value < root.value) {
        root.leftLeaf = this.delete(value, root.leftLeaf);
    }
    
    else if (value > root.value) {
        root.rightLeaf = this.delete(value, root.rightLeaf);
    }

    else // si llega a este else, se encontró el nodo a borrar
        {
        // Caso 0 hijos
        if (root.leftLeaf === null && root.rightLeaf === null) {
            if (root === this.root) this.root = null;
            return null;
        }
        // Caso 1 hijo
        if (root.leftLeaf === null) {
            if (root === this.root) this.root = root.rightLeaf;
            return root.rightLeaf;
        }
        if (root.rightLeaf === null) {
            if (root === this.root) this.root = root.leftLeaf;
            return root.leftLeaf;
        }
        // Caso 2 hijos
        let minNode = this.findMin(root.rightLeaf);
        root.value = minNode.value;
        root.rightLeaf = this.delete(minNode.value, root.rightLeaf);
    }

    return root;
 }

 findMin(root) {
    while (root.leftLeaf !== null) {
        root = root.leftLeaf;
    }
    return root;
  }


  bfs(root = this.root) {
    if (!root) return;
    let queue = [];
    
    queue.push(root);
    

    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current.value);
        
        if (current.leftLeaf) {queue.push(current.leftLeaf); }
        if (current.rightLeaf) {queue.push(current.rightLeaf);}
    
    }
    
}
  bfsPorNiveles(root = this.root) {
    if (!root) return;

    let queue = [root];
    let niveles = [];

    while (queue.length > 0) {
        let nivel = [];
        let size = queue.length; // nodos en este nivel

        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            nivel.push(current.value);

            if (current.leftLeaf) queue.push(current.leftLeaf);
            if (current.rightLeaf) queue.push(current.rightLeaf);
        }

        niveles.push(nivel);
    }

    console.log(niveles);
    return niveles;
  }

  MaxDepth(root = this.root){
    if (root === null){return 0;}

    let left = this.MaxDepth(root.leftLeaf);
    let right = this.MaxDepth(root.rightLeaf);
    return 1 + Math.max(left, right);
  }
 
  invertTree(root = this.root) {
    if (root === null) return null;

    // Intercambiar los hijos
    let temp = root.leftLeaf;
    root.leftLeaf = root.rightLeaf;
    root.rightLeaf = temp;

    // Invertir los subárboles
    this.invertTree(root.leftLeaf);
    this.invertTree(root.rightLeaf);

    return root;
}

}






let arbol = new BST();

arbol.add([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]);





arbol.balance();


arbol.prettyPrint();

arbol.invertTree();

arbol.prettyPrint();

