class Node{
    constructor(value){
        this.value = value;
        this.leftLeaf = null;
        this.rightLeaf = null;
        this.balanced = [];
    }
}

class BST{
    constructor(){
        this.root = null;
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

  // Recursive function to construct BST
   sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) {return null;}

    // Find the middle element
    let mid = Math.floor((start + end) / 2);

    // Create root node
    this.add(arr[mid]);

    // Create left subtree
    this.sortedArrayToBSTRecur(arr, start, mid - 1);

    // Create right subtree
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

    // Buscar en el subárbol izquierdo
    if (value < root.value) {
        root.leftLeaf = this.delete(value, root.leftLeaf);
    }
    // Buscar en el subárbol derecho
    else if (value > root.value) {
        root.rightLeaf = this.delete(value, root.rightLeaf);
    }
    // Encontramos el nodo a borrar
    else {
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

}






let arbol = new BST();

arbol.add([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,21,22]);





arbol.balance();




arbol.delete(21);
arbol.prettyPrint();