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
    let mid = (start + end) / 2;

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
  

 }






let arbol = new BST();

arbol.add([1,2,3,4,5,6,7]);
arbol.prettyPrint();
//arbol.balance();
arbol.prettyPrint();

arbol.preOrder();

console.log("ojalá: ")
arbol.inOrder();