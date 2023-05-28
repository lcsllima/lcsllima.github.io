$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const email = document.querySelector('.icon-email');

email.addEventListener("click", function(event) {
    event.preventDefault();
    navigator.clipboard.writeText(email.dataset.outlook);
});