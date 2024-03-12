document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const family = document.getElementById('family').value;
    const contact = { name, phone, family };

    fetch('/contacts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(contact)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('contactList').innerHTML += `<li>${data.name} - ${data.phone} - ${data.family == true? 'Familia': 'Não Familia'}<li>`
    })
    .catch(error => console.log('Error:', error));
})

window.onload = function() {
    fetch('/contacts')
    .then(response => response.json())
    .then(data => {
        data.forEach(contact => {
            document.getElementById('contactList').innerHTML += `<li>${contact.name} - ${contact.phone} - ${data.family == true? 'Familia': 'Não Familia'}<li>`
        })
    })
    .catch(error => console.log('Error:', error));
};