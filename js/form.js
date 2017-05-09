const askJackForm = document.getElementById("contactForm");
if(askJackForm){
    const askJackFormSubmit = e => {
        e.preventDefault();
        console.log("hello");
        const contact = {
            "name": e.target.name.value,
            "number": e.target.number.value,
            "email": e.target.email.value,
            "message": e.target.message.value,
        };

        fetch("https://www.codementor.io/learn-programming/12-important-things-to-include-in-web-dev-portfolios", {mode: "no-cors", method: "POST", body: contact})
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