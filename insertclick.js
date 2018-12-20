// var onEvent = 'click'
// var tagToInsert = 'div';
// var tagClassToInsert = 'created-tag';
// var blockToInsert = 'div.place-to-insert';
// var textToInsert = 'This text was inserted dinamicaly';

// var button = document.querySelector('button.button');
// if(document.querySelector('div.created-tag') == null){
//         button.addEventListener(onEvent, function(){
//         var insert = new InsertBlock(tagToInsert, blockToInsert, textToInsert);
//         insert.insertBlock();
//     });
// }

var selectBlock = 'textarea.text-area';
// var selectBlock = 'textarea.text-area';
var tagToInsert = 'div';
// var blockBeforeInsert = 'div.place-to-insert';
var blockBeforeInsert = 'insert-before';
var textToInsert =
`
<div class='block-edit-bar'>
    <button type="button" class="btn bg-deep-purple waves-effect btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <i class="material-icons">settings</i>
        <span>SETTINGS</span>
    </button>
</div>
`;
var deleteBlock = 'div.created-tag';

document.querySelector(selectBlock).onmouseover = function(){
    var insertEvent = new HandleBlock(tagToInsert, blockBeforeInsert, textToInsert, deleteBlock);
    insertEvent.insertBlock();
};

document.querySelector(selectBlock).onmouseout = function(){
    var deleteEvent = new HandleBlock(tagToInsert, blockBeforeInsert, textToInsert, deleteBlock);
    deleteEvent.deleteBlock();
}