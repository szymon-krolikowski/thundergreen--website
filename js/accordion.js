const accordion = document.getElementsByClassName('changes__contentBox');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle('changesActiveBox')
    })
}

const accordionPhotovoltaic = document.getElementsByClassName('faq__contentBox');

for (i = 0; i < accordionPhotovoltaic.length; i++) {
    accordionPhotovoltaic[i].addEventListener("click", function() {
        this.classList.toggle('faqActiveBox')
    })
}



