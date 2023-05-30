$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

const github = document.querySelector('.icon-github');

github.addEventListener("click", function(event) {
    event.preventDefault();
    navigator.clipboard.writeText(github.dataset.outlook);
});