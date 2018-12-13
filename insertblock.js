var onEvent = 'click';
var selectBlock = 'button.button';
var containerBlock = 'div';
var blockToInsert = 'div.place-to-insert';
var textToInsert = 'Some text to insert.';

var button = document.querySelectorAll(selectBlock);
for(var i = 0; i < button.length; i++){
    button[i].addEventListener(onEvent, insertInPlace);
}

function insertInPlace(){
    var insert = new InsertBlock(button, containerBlock, blockToInsert, textToInsert);
    insert.insertBlock();    
}