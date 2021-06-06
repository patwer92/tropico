const contactForm = document.querySelector("#contactForm");

const contactName = document.querySelector("#contactName");
const contactNameError = document.querySelector("#contactNameError");

const contactEmail = document.querySelector("#contactEmail");
const contactEmailError = document.querySelector("#contactEmailError");

const contactSubject = document.querySelector("#contactSubject");
const contactSubjectError = document.querySelector("#contactSubjectError");

const contactMessage = document.querySelector("#contactMessage");
const contactMessageError = document.querySelector("#contactMessageError");

function validateContactForm(event) {

    event.preventDefault();

    if (checkLength(contactName.value, 4) === true) {
        contactNameError.style.display = "none";
    } else {
        contactNameError.style.display = "block";
    }

    if (validateContactEmail(contactEmail.value) === true) {
        contactEmailError.style.display = "none";
    } else {
        contactEmailError.style.display = "block";
    }

    if (checkLength(contactSubject.value, 14) === true) {
        contactSubjectError.style.display = "none";
    } else {
        contactSubjectError.style.display = "block";
    }

    if (checkLength(contactMessage.value, 24) === true) {
        contactMessageError.style.display = "none";
    } else {
        contactMessageError.style.display = "block";
    }

    if (checkLength(contactName.value, 4) &&
        validateContactEmail(contactEmail.value) &&
        checkLength(contactSubject.value, 14) &&
        checkLength(contactMessage.value, 24)
    ) {
        alert("Your message has been successfully sent.");
    }
}

contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateContactEmail(contactEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(contactEmail);
    return patternMatches;

}