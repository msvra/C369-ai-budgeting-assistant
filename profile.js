

document.addEventListener('DOMContentLoaded', function() {
    
    const initialValues = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };

    document.getElementById('profile-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);
        const changes = [];
        
        formData.forEach((value, key) => {
            if (value !== initialValues[key]) {
                changes.push({ field: key, newValue: value });
            }
        });

        if (changes.length > 0) {
            const changeMessages = changes.map(change => {
                const fieldNames = {
                    name: 'Name',
                    email: 'Email Address',
                    phone: 'Phone Number',
                    address: 'Address'
                };
                return `${fieldNames[change.field]} to "${change.newValue}"`;
            });

            const message = `You have successfully changed ${changeMessages.join(' and ')}.`;
            document.getElementById('message').innerText = message;
        } else {
            document.getElementById('message').innerText = 'No changes detected.';
        }
    });
});

