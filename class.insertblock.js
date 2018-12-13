class InsertBlock{

    constructor(clickButton, containerBlock, blockToInsert, textToInsert){
        this.clickButton = clickButton;
        this.containerBlock = containerBlock;
        this.blockToInsert = blockToInsert;
        this.textToInsert = textToInsert;
    }

    inBlock(){

        var button = document.querySelectorAll(this.clickButton);
        
        for(var i = 0; i < button.length; i++){
            button[i].addEventListener('click', function(){
            console.log(this.textToInsert);
        
            var block = document.createElement(this.blockToInsert);
            block.innerHTML = this.textToInsert ;
            containerBlock = document.querySelector(this.containerBlock);
            containerBlock.appendChild(block);
            });
        }
    }
}