function calculateBudget() {
    const foodBudget = parseFloat(document.getElementById('food').value) || 0;
    const clothesBudget = parseFloat(document.getElementById('clothes').value) || 0;
    const makeupBudget = parseFloat(document.getElementById('makeup').value) || 0;
    const groceriesBudget = parseFloat(document.getElementById('groceries').value) || 0;

    const totalBudget = foodBudget + clothesBudget + makeupBudget + groceriesBudget;

    document.getElementById('foodBudget').textContent = `$${foodBudget}`;
    document.getElementById('clothesBudget').textContent = `$${clothesBudget}`;
    document.getElementById('makeupBudget').textContent = `$${makeupBudget}`;
    document.getElementById('groceriesBudget').textContent = `$${groceriesBudget}`;

    document.getElementById('foodUsed').textContent = `${((foodBudget / totalBudget) * 100).toFixed(2)}%`;
    document.getElementById('clothesUsed').textContent = `${((clothesBudget / totalBudget) * 100).toFixed(2)}%`;
    document.getElementById('makeupUsed').textContent = `${((makeupBudget / totalBudget) * 100).toFixed(2)}%`;
    document.getElementById('groceriesUsed').textContent = `${((groceriesBudget / totalBudget) * 100).toFixed(2)}%`;

    const data = {
        labels: ['Food', 'Clothes', 'Makeup', 'Groceries'],
        datasets: [{
            label: 'Budget Distribution',
            data: [foodBudget, clothesBudget, makeupBudget, groceriesBudget],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    };

    const config = {
        type: 'pie',
        data: data,
    };

    const budgetChart = new Chart(
        document.getElementById('budgetChart'),
        config
    );
}