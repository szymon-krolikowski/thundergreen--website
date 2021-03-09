const accordion = document.getElementsByClassName('changes__contentBox');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('changesActiveBox')
    })
}