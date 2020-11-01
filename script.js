document.addEventListener("DOMContentLoaded", function() { 
    let submitButton = document.querySelector('\#submitBtn');
    submitButton.addEventListener('click', handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
        let emailInput = document.querySelector('\#email')
        let messageInput = document.querySelector('\#message')
        console.log(emailInput.value, messageInput.value)
    }
});



