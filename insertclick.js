var parentTag = 'div.parent-block';
var tagToInsert = 'div';
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
    parentNode.addEventListener('mouseover', function(){
        var newNode = new HandleNode(parentNode, tagToInsert, insertHTML);
        newNode.createChild();
    });
