function sendMail(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_m77ui59';
        const templateID = 'template_ddkc28y';
        const userID = 'a1gtZthGq3AkQT8uF';

        // Collecte des données du formulaire
        const templateParams = {
        username: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
        };

        const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: templateParams
        };

        // Envoi de la requête avec Fetch API
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => {
        if (response.ok) {
            alert("Votre message a été envoyé avec succès.");
            document.getElementById('contact-form').reset();
        } else {
            return response.json().then(err => { throw err; });
        }
        })
        .catch(error => {
        alert("Une erreur s'est produite lors de l'envoi de votre message : " + error);
        });
    });
}