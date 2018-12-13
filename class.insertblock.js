class InsertBlock{

    constructor(clickButton, containerBlock, blockToInsert, textToInsert){
        this.clickButton = clickButton;
        this.containerBlock = containerBlock;
        this.blockToInsert = blockToInsert;
        this.textToInsert = textToInsert;
        }

    insertBlock(){

        for(var i = 0; i < this.clickButton.length; i++){
            var block = document.createElement(this.containerBlock);
            block.innerHTML = this.textToInsert ;
            var contBlock = document.querySelector(this.blockToInsert);
            contBlock.appendChild(block);
        }
    }
}