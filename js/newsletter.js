const newsletterForm = document.querySelector("#newsletterForm");

const newsletterEmail = document.querySelector("#newsletterEmail");

const newsletterEmailError = document.querySelector("#newsletterEmailError");

function validateContactForm(event) {

    event.preventDefault();

    if (validateContactEmail(newsletterEmail.value) === true) {
        newsletterEmailError.style.display = "none";
    } else {
        newsletterEmailError.style.display = "block";
    }

    if (validateContactEmail(newsletterEmail.value)
    ) {
        alert("You have successfully subscribed to our newsletter.");
    }
}

newsletterForm.addEventListener("submit", validateContactForm);

function validateContactEmail(newsletterEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(newsletterEmail);
    return patternMatches;


}