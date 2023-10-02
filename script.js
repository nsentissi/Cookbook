const shareButton = document.getElementById('shareButton');
shareButton.addEventListener('click', shareRecipe);


function shareRecipe () {
    const currentURL = window.location.href;
    alert('Your recipe has been shared!');
}