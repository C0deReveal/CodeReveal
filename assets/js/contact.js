function submitForm() {
const scriptURL = 'https://script.google.com/macros/s/AKfycbzV_Dh618VYfuOtAxlksc-eE5cR-BjJUn5j20RHinEm9LcoaS4ey5Rf-t7BRknfwibIcg/exec';
const form = document.forms[0];
const successMessage = 'Message sent. We will get back to you soon.';
const errorMessage = 'There was a problem sending the message. Please try again.';
const submitButton = form.querySelector('button[type="submit"]');
let isSubmitting = false;
form.addEventListener('submit', function (e) {
e.preventDefault();

if (isSubmitting) {
return;
}
isSubmitting = true;
submitButton.setAttribute('disabled', true);

fetch(scriptURL, { method: 'POST', body: new FormData(form) })
.then((response) => {
if (response.ok) {
alert(successMessage);
form.reset();
location.reload();
} else {
alert(errorMessage);
}
})
.catch((error) => {
console.error(error);
alert(errorMessage);
})
.finally(() => {
isSubmitting = false;
submitButton.removeAttribute('disabled');
});
});
}
window.addEventListener('load', submitForm);