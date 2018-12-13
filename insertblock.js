class InsertBlock{

    constructor(clickButton, containerBlock, blockToInsert, textToInsert){
        this.clickButton = clickButton;
        this.containerBlock = containerBlock;
        this.blockToInsert = blockToInsert;
        this.textToInsert = textToInsert;
        }

    inBlock(){

        for(var i = 0; i < this.clicdButton.length; i++){
            var block = document.createElement(this.containerBlock);
            block.innerHTML = this.textToInsert ;
            var contBlock = document.querySelector(this.blockToInsert);
            contBlock.appendChild(block);
        }
    }
}

var button = document.querySelectorAll('button.button');
button.addEventListener('click', insertInPlace);

var containerBlock = 'div';
var blockToInsert = 'div.place-to-insert';
var textToInsert = 'Some text to insert.';

function insertInPlace(){
    var insert = new InsertBlock(button, containerBlock, blockToInsert, textToInsert);
    insert.inBlock();    
}