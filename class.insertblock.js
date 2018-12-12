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
            containerBlock = document.querySelector(this.containerBlock);
            containerBlock.appendChild(block);
            });
        }

    }

}