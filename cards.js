

document.addEventListener('DOMContentLoaded', function() {
    
    loadCards();

    
    document.getElementById('add-card-button').addEventListener('click', function() {
        document.getElementById('add-card-modal').style.display = 'block';
    });

    
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('add-card-modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('add-card-modal')) {
            document.getElementById('add-card-modal').style.display = 'none';
        }
    });

    
    document.getElementById('add-card-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const cardholderName = document.getElementById('cardholder-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;

        
        const card = {
            cardholderName,
            cardNumber: cardNumber.slice(-4), 
            expiryDate,
            cvv: cvv.slice(0, 3) 
        };

        
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push(card);
        localStorage.setItem('cards', JSON.stringify(cards));

        
        document.getElementById('add-card-modal').style.display = 'none';
        document.getElementById('add-card-form').reset();

        
        loadCards();
    });
});


function loadCards() {
    const cardList = document.getElementById('card-list');
    cardList.innerHTML = ''; 

    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.forEach(card => {
        const cardItem = document.createElement('li');
        cardItem.className = 'card-item';
        cardItem.innerHTML = `
            <strong>Cardholder Name:</strong> ${card.cardholderName}<br>
            <strong>Card Number:</strong> **** **** **** ${card.cardNumber}<br>
            <strong>Expiry Date:</strong>  ${card.expiryDate}<br>
            <strong>CVV:</strong> ***
        `;
        cardList.appendChild(cardItem);
    });
}
