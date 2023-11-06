const catCards = document.querySelectorAll('.cards')
console.log(catCards)

catCards.forEach((catCard) => {
    catCard.addEventListener('click', () => {
        const availability = catCard.querySelector('.availability');

        availability.style.display = "block";

    });
    
});