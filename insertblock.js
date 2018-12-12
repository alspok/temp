class InsertBlock{

    constructor(containerBlock, blockToInsert, textToInsert, clickButton){
        this.containerBlock = containerBlock;
        this.blockToInsert = blockToInsert;
        this.textToInsert = textToInsert;
        this.clickButton = clickButton;
    }

    inBlock(){

        var button = document.querySelectorAll(this.clickButton);
        
        for(var i = 0; i < button.length; i++){
            button[i].addEventListener('click', function(){
            console.log(this.textToInsert);
        
            var block = document.createElement(this.blockToInsert);
            block.innerHTML = this.textToInsert ;
            var contBlock = document.querySelector(this.containerBlock);
            contBlock.appendChild(block);
            });
        }

    }

}

var containerBlock = 'div';
var blockToInsert = 'div.place-to-insert';
var clickButton = 'button';
var textToInsert = 'Inserted text'

var insert = new InsertBlock(containerBlock, blockToInsert, textToInsert, clickButton);
insert.inBlock();