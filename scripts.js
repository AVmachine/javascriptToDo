var addButton, toDoText, newElement, newText, list, deleteButton, listLine;

addButton = document.getElementById('addButton');
var textField = document.getElementById('toDoItem');
list = document.querySelector('ol');

function addItem(e)
{	
	list = document.querySelector('ol');
	toDoText = document.getElementById('toDoItem').value;
	newElement = document.createElement('li');
	newText = document.createTextNode(toDoText);
	newElement.appendChild(newText);
	list.appendChild(newElement);
	document.getElementById('toDoItem').value = ' ';
	textField.focus();
	//add the delete button
	deleteButton = document.createElement('button');
	deleteButton.setAttribute('id', 'deleteButton');
	var deleteText = document.createTextNode('delete');
	deleteButton.appendChild(deleteText);
	newElement.appendChild(deleteButton);
}

function addItemOnKeypress(e)
{
	 if(e.keyCode == 13)
	 {
	 	list = document.querySelector('ol');
		toDoText = document.getElementById('toDoItem').value;
		newElement = document.createElement('li');
		newText = document.createTextNode(toDoText);
		newElement.appendChild(newText);
		list.appendChild(newElement);
		document.getElementById('toDoItem').value = ' ';
		//add the delete button
		deleteButton = document.createElement('button');
		deleteButton.setAttribute('id', 'deleteButton');
		var deleteText = document.createTextNode('delete');
		deleteButton.appendChild(deleteText);
		newElement.appendChild(deleteButton);

	 }
	 return;
}


function getTarget(e)
{
	return e.target; // sole purpose is to get the target element
}

function deleteItem(e)
{
	var target, elParent, elGrandparent, siblingEl; // going to be the variables that
	// we use to remove a line item
	target = getTarget(e);
	// gets the closes element to target
	elParent = target.parentNode;
	elParent.parentNode.removeChild(elParent);
}

addButton.addEventListener('click', addItem, false);
textField.addEventListener('keydown', addItemOnKeypress, false);
list.addEventListener('click', function(e){
	deleteItem(e);}, false);


