class HandleNode{

    constructor(parentNode, tagToInsert, classToInsert, insertHTML){
        this.parentNode = parentNode;
        this.tagToInsert = tagToInsert;
        this.classToInsert = classToInsert;
        this.insertHTML = insertHTML;
    }
    
    createChild(){

        if(this.parentNode.childElementCount == 0) {this.insertChild();}
            else {this.insertBeforeChild();}
    }

    insertChild(){

        var newNode = document.createElement(this.tagToInsert);
        newNode.classList.add('new-node');
        newNode.innerHTML = this.insertHTML;
        this.parentNode.appendChild(newNode);
    }

    removeChild(){
        var newNode = document.querySelector(this.tagToInsert + '.' + this.classToInsert);
        newNode.remove();
    }

    insertBeforeChild(){
        var newNode = document.createElement(this.tagToInsert);
        newNode.innerHTML = this.insertHTML;
        var childNode = this.parentNode.firstChild;
        this.parentNode.insertBefore(newNode, childNode);

    }
}