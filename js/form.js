const askJackForm = document.getElementById("contactForm");
if(askJackForm){
    const askJackFormSubmit = e => {
        e.preventDefault();
        const contact = {
            "name": e.target.name.value,
            "number": e.target.number.value,
            "_replyto": e.target._replyto.value,
            "message": e.target.message.value,
        };

        fetch("http://jackcat.co.uk/", {mode: "no-cors", method: "POST", body: contact})
            .then(response => {
                console.log('hello response!', response);
            }).catch(() => {
                let allContacts = [];

                const existingContacts = localStorage.getItem('contact');
                if(existingContacts){
                    allContacts = JSON.parse(existingContacts);
                }

                allContacts.push(contact);
                localStorage.setItem('contact', JSON.stringify(allContacts));
            });
    };
    askJackForm.addEventListener('submit', askJackFormSubmit, false);
}
