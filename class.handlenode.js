class HandleNode{

    constructor(parentNode, tagToInsert, insertHTML){
        this.parentNode = parentNode;
        this.tagToInsert = tagToInsert;
        this.insertHTML = insertHTML;
    }
    
    createChild(){

        if(this.parentNode.childElementCount == 0) {this.insertChild();}
            else {this.insertBeforeChild();}
    }

    insertChild(){

        var newNode = document.createElement(this.tagToInsert);
        newNode.innerHTML = this.insertHTML;
        this.parentNode.appendChild(newNode);
    }

    insertBeforeChild(){

    }
}