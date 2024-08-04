
function openPinpad() {
    document.getElementById('pinpad-modal').style.display = 'block';
}


function closePinpad() {
    document.getElementById('pinpad-modal').style.display = 'none';
}


function addAmount() {
    const amountInput = document.getElementById('amount-input');
    const amount = parseFloat(amountInput.value);
    
    if (!isNaN(amount) && amount > 0) {
        const balanceElement = document.querySelector('.balance');
        let currentBalance = parseFloat(balanceElement.innerText.replace('$', ''));
        const newBalance = currentBalance + amount;

    
        localStorage.setItem('balance', newBalance.toFixed(2));

        
        balanceElement.innerText = `$${newBalance.toFixed(2)}`;

        
        document.getElementById('pinpad-modal').style.display = 'none';
        document.getElementById('confirmation-message').innerText = `You have added $${amount.toFixed(2)} to your savings.`;
        document.getElementById('confirmation-modal').style.display = 'block';
        
        
        amountInput.value = '';
    } else {
        alert('Please enter a valid amount.');
    }
}


function closeConfirmation() {
    document.getElementById('confirmation-modal').style.display = 'none';
}
