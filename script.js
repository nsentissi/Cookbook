const shareButtons = document.querySelectorAll('.shareButton');

shareButtons.forEach(button => {
    button.addEventListener('click', shareRecipe);
});


function shareRecipe () {
    const currentURL = window.location.href;
    alert('Your recipe has been shared!');
}