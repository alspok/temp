var parentTag = 'div.parent-block';
var tagToInsert = 'div';
var classToInsert = 'new-node';
var insertHTML =
`
<div class='block-edit-bar'>
    <button type="button" class="btn bg-deep-purple waves-effect btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <i class="material-icons">settings</i>
        <span>SETTINGS</span>
    </button>
</div>
`;
var deleteBlock = 'div.created-tag';

var parentNode = document.querySelector(parentTag);
    parentNode.addEventListener('mouseenter', function(){
        var newNode = new HandleNode(parentNode, tagToInsert, classToInsert, insertHTML);
        newNode.insertChild();
    });

    parentNode.addEventListener('mouseout', function(){
        var newNode = new HandleNode(parentNode, tagToInsert, classToInsert, insertHTML);
        newNode.removeChild();
    });


