
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(clickEvent) {

    let messageTextarea = document.getElementById('fMessage');
    let nameField = document.getElementById('fName');

    console.log(messageTextarea.value, nameField.value);
    console.log(messageTextarea.value.length, nameField.value.length);

    if (messageTextarea.value.length < 20 || nameField.value.length < 4) {
        alert('Name must be more than 3 characters long. And message must be longer than 19 characters');
        clickEvent.preventDefault();
    }
})
