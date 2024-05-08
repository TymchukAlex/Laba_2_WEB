var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

var cards = [
    { image: '1.jpg', description: 'Опис 1', showDescription: false, tag: '1'},
    { image: '1.jpg', description: 'Опис 11', showDescription: false, tag: '1' },
    { image: '1.jpg', description: 'Опис 111', showDescription: false, tag: '1' },
    { image: '1.jpg', description: 'Опис 1111', showDescription: false, tag: '1' },
    { image: '1.jpg', description: 'Опис 11111', showDescription: false, tag: '1' },
    { image: '1.jpg', description: 'Опис 111111', showDescription: false, tag: '1' },
    { image: '1.jpg', description: 'Опис 1111111', showDescription: false, tag: '1' },
    { image: '2.jpg', description: 'Опис 2', showDescription: false, tag: '2' },
    { image: '3.jpg', description: 'Опис 3', showDescription: false, tag: '3' },
];

function loadData() {
    var filter = document.getElementById("filter").value;
    var filteredCards = [];

    if (filter === "filter1") {
        // Filter cards based on some condition, for example, by description
        filteredCards = cards.filter(function(card) {
            return card.tag === '1'; // Change the condition as needed
        });
    } else if (filter === "filter2") {
        filteredCards = cards.filter(function(card) {
            return card.tag !== '1'; // Change the condition as needed
        });
    }
        else if (filter === "filter0") {
            filteredCards = cards.filter(function(card) {
                return card.tag; // Change the condition as needed
            });
    }

    // Clear existing cards
    var cardsDiv = document.getElementById('card-container');
    cardsDiv.innerHTML = '';

    // Add filtered cards to the DOM
    for (var i = 0; i < filteredCards.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = '<img src="' + filteredCards[i].image + '" alt="Card image" style="width:100%"><div class="container"><h4><b>' + filteredCards[i].description + '</b></h4></div>';
        cardsDiv.appendChild(card);
    }
}

function showModal() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
    var cardsDiv = document.getElementById('card-container');
    for (var i = 0; i < cards.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = '<img src="' + cards[i].image + '" alt="Card image" style="width:100%"><div class="container"><h4><b>' + cards[i].description + '</b></h4></div>';
        cardsDiv.appendChild(card);
    }

    adjustCardWidth(); // Call the function to adjust card width after loading the cards
};

function adjustCardWidth() {
    var containerWidth = document.getElementById('card-container').offsetWidth;
    var cardWidth = document.querySelector('.card').offsetWidth;
    var numCardsPerRow = Math.floor(containerWidth / (cardWidth + 20)); // Assuming 10px margin on both sides of the card

    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.style.width = 'calc(' + (100 / numCardsPerRow) + '% - 20px)';
    });
}


// Показати модальне вікно після 30 секунд
setTimeout(showModal, 300);
