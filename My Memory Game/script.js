document.addEventListener('DOMContentLoaded', startGame);

let cards = [
    { id: 1, image: 'image1.jpg' },
    { id: 2, image: 'image2.jpg' },
    { id: 3, image: 'image3.jpg' },
    { id: 4, image: 'image4.jpg' },
    { id: 5, image: 'image5.jpg' },
    { id: 6, image: 'image6.jpg' },
    { id: 7, image: 'image7.jpg' },
    { id: 8, image: 'image8.jpg' },
];

let flippedCards = [];
let matchedCards = [];
let moves = 0;

function startGame() {
    const memoryGame = document.getElementById('memory-game');
    cards = shuffle(cards.concat(cards));

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.innerHTML = `
           
            <img class="card-img-front" src="${card.image}" alt="Card" data-id="${card.id}">`;
        cardElement.addEventListener('click', flipCard);
        memoryGame.appendChild(cardElement);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const isMatch = card1.dataset.id === card2.dataset.id;

    moves++;

    if (isMatch) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        matchedCards.push(card1, card2);

        if (matchedCards.length === cards.length) {
            alert(`🎉 Congrats 🎉! Você completou o jogo em ${moves} movimentos.`);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
