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

var clickButton = 'button.button';
var containerBlock = 'div';
var blockToInsert = 'div.place-to-insert';
var textToInsert = 'This text was inserted dinamicaly';

var insert = new InsertBlock(clickButton, containerBlock, blockToInsert, textToInsert);
insert.inBlock();

// var button = document.querySelectorAll(clickButton);

// for(var i = 0; i < button.length; i++){
//     button[i].addEventListener('click', function(){
//     // alert("button was clicked");
//     // var HTMLText = 'some text';
//     console.log(textToInsert);

//     blockToInsert = document.createElement( 'div' );
//     blockToInsert.innerHTML = HTMLText ;
//     containerBlock = document.querySelector('div.place-to-insert');
//     containerBlock.appendChild( blockToInsert );
//     });
// }